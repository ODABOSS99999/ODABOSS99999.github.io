export type RoomSound = 'ring' | 'pickup' | 'whoosh';

const noteFrequency = (note: number) => 440 * 2 ** ((note - 69) / 12);

function createAmbientLoop(context: AudioContext) {
  const beat = 60 / 75;
  const bar = beat * 4;
  const step = beat / 2;
  const duration = bar * 4;
  const buffer = context.createBuffer(1, Math.round(context.sampleRate * duration), context.sampleRate);
  const samples = buffer.getChannelData(0);
  const chords = [
    { notes: [48, 55, 59, 64], bass: 36, melody: [72, 74, 79, null, 76, 74, null, 71] },
    { notes: [43, 50, 55, 59], bass: 31, melody: [71, 74, null, 76, 74, 71, 67, null] },
    { notes: [45, 52, 55, 60], bass: 33, melody: [69, 72, 76, null, 74, 72, 69, null] },
    { notes: [41, 48, 52, 57], bass: 29, melody: [69, 72, 76, null, 74, 72, 67, null] },
  ].map(chord => ({
    notes: chord.notes.map(noteFrequency),
    bass: noteFrequency(chord.bass),
    melody: chord.melody.map(note => note === null ? null : noteFrequency(note)),
  }));

  for (let index = 0; index < samples.length; index++) {
    const time = index / context.sampleRate;
    const barIndex = Math.floor(time / bar) % chords.length;
    const chord = chords[barIndex];
    const barTime = time % bar;
    const beatTime = time % (beat * 2);
    const stepIndex = Math.floor(barTime / step);
    const stepTime = barTime % step;
    const chordFade = Math.min(1, barTime / 0.3, (bar - barTime) / 0.3);
    let sample = 0;

    for (const note of chord.notes) {
      const phase = 2 * Math.PI * note * time;
      sample += (Math.sin(phase) + Math.sin(phase * 2) * 0.12) * 0.047 * chordFade;
    }

    const bassAge = beatTime;
    const bassEnvelope = Math.exp(-bassAge * 3.8);
    sample += Math.sin(2 * Math.PI * chord.bass * bassAge) * 0.13 * bassEnvelope;

    const melodyNote = chord.melody[stepIndex];
    if (melodyNote !== null && melodyNote !== undefined) {
      const age = stepTime;
      const envelope = Math.min(1, age / 0.018) * Math.exp(-age * 5.2);
      const phase = 2 * Math.PI * melodyNote * age;
      sample += (Math.sin(phase) + Math.sin(phase * 2) * 0.24) * 0.2 * envelope;
    }

    if (beatTime < 0.22) {
      const kickPhase = 2 * Math.PI * (67 * beatTime - 25 * beatTime * beatTime);
      sample += Math.sin(kickPhase) * 0.075 * Math.exp(-beatTime * 17);
    }

    const beatIndex = Math.floor(time / beat) % 4;
    const tickTime = time % beat;
    if ((beatIndex === 1 || beatIndex === 3) && tickTime < 0.045) {
      sample += Math.sin(2 * Math.PI * 1050 * tickTime) * 0.018 * Math.exp(-tickTime * 105);
    }

    const loopFade = Math.min(1, time / 0.08, (duration - time) / 0.08);
    samples[index] = Math.max(-0.9, Math.min(0.9, sample * loopFade));
  }

  return buffer;
}

/** Original, locally synthesized ambient music and room interaction sounds. */
export class RoomAudio {
  private context?: AudioContext;
  private master?: GainNode;
  private sources: (AudioBufferSourceNode | OscillatorNode)[] = [];

  async start(volume: number) {
    if (!this.context) {
      const context = new AudioContext();
      this.context = context;
      const master = context.createGain();
      master.gain.value = 0;
      master.connect(context.destination);
      this.master = master;

      const music = context.createBufferSource();
      music.buffer = createAmbientLoop(context);
      music.loop = true;
      music.connect(master);
      music.start();
      this.sources.push(music);

    }

    await this.context.resume();
    this.volume(volume);
  }

  private lastRing = -Infinity;

  /** Effects share the existing volume control and never unlock audio on hover. */
  effect(kind: RoomSound) {
    const context = this.context;
    const master = this.master;
    if (!context || !master || context.state !== 'running' || master.gain.value < 0.001) return;
    const now = context.currentTime;
    if (kind === 'ring') {
      if (now - this.lastRing < 2) return;
      this.lastRing = now;
    }

    const envelope = context.createGain();
    envelope.connect(master);
    const duration = kind === 'whoosh' ? 0.55 : kind === 'ring' ? 0.38 : 0.12;
    envelope.gain.setValueAtTime(0, now);
    envelope.gain.linearRampToValueAtTime(kind === 'ring' ? 0.065 : 0.10, now + 0.018);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    if (kind === 'ring') {
      for (const frequency of [660, 880]) {
        const tone = context.createOscillator();
        tone.frequency.value = frequency;
        tone.type = 'sine';
        tone.connect(envelope);
        tone.start(now);
        tone.stop(now + duration);
        tone.onended = () => {
          tone.disconnect();
          if (frequency === 880) envelope.disconnect();
        };
      }
    } else {
      const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
      const data = buffer.getChannelData(0);
      for (let index = 0; index < data.length; index++) data[index] = Math.random() * 2 - 1;
      const source = context.createBufferSource();
      const filter = context.createBiquadFilter();
      source.buffer = buffer;
      filter.type = 'bandpass';
      filter.Q.value = kind === 'whoosh' ? 0.7 : 2;
      filter.frequency.setValueAtTime(kind === 'whoosh' ? 1100 : 1800, now);
      filter.frequency.exponentialRampToValueAtTime(220, now + duration);
      source.connect(filter);
      filter.connect(envelope);
      source.start(now);
      source.stop(now + duration);
      source.onended = () => {
        source.disconnect();
        filter.disconnect();
        envelope.disconnect();
      };
    }
  }

  volume(value: number) {
    if (this.context && this.master) {
      this.master.gain.cancelScheduledValues(this.context.currentTime);
      this.master.gain.setTargetAtTime(value, this.context.currentTime, 0.08);
    }
  }

  async pause() {
    if (this.context) await this.context.suspend();
  }

  async dispose() {
    this.sources.forEach(source => source.stop());
    this.sources = [];
    await this.context?.close();
    this.context = undefined;
    this.master = undefined;
  }
}
