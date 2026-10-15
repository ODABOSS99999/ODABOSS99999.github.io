// Original procedural ambience: filtered noise and two very quiet sine tones.
// No recordings, external requests, or licensed music.
export class RoomAudio {
  private context?: AudioContext;
  private master?: GainNode;
  private sources: (AudioBufferSourceNode | OscillatorNode)[] = [];
  async start(volume: number) {
    if (!this.context) {
      const ctx = new AudioContext(); this.context = ctx;
      const master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination); this.master = master;
      // Original instrumental loop, synthesized locally after a user gesture.
      const song=ctx.createBuffer(1,ctx.sampleRate*16,ctx.sampleRate);
      const samples=song.getChannelData(0);
      const chords=[[130.81,164.81,196],[110,130.81,164.81],[87.31,110,130.81],[98,123.47,146.83]];
      const notes=[261.63,329.63,392,329.63,440,392,329.63,261.63,349.23,329.63,261.63,220,293.66,392,329.63,293.66];
      for(let i=0;i<samples.length;i++){const t=i/ctx.sampleRate,beat=t%1,chordTime=t%4;let v=0;for(const f of chords[Math.floor(t/4)])v+=Math.sin(2*Math.PI*f*t)*.022*Math.min(chordTime*12,1)*Math.exp(-chordTime*.7);v+=Math.sin(2*Math.PI*notes[Math.floor(t)]*t)*.045*Math.min(beat*25,1)*Math.exp(-beat*4);samples[i]=v;}
      const music=ctx.createBufferSource();music.buffer=song;music.loop=true;music.connect(master);music.start();this.sources.push(music);
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
      const values = buffer.getChannelData(0);
      for (let i = 0; i < values.length; i++) values[i] = (Math.random() * 2 - 1) * 0.08;
      const source = ctx.createBufferSource(); source.buffer = buffer; source.loop = true;
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 420;
      source.connect(filter); filter.connect(master); source.start(); this.sources.push(source);
      [110, 165].forEach(f => { const tone = ctx.createOscillator(); const gain = ctx.createGain(); tone.frequency.value = f; gain.gain.value = 0.003; tone.connect(gain); gain.connect(master); tone.start(); this.sources.push(tone); });
    }
    await this.context.resume(); this.volume(volume);
  }
  volume(value: number) { if (this.context && this.master) { this.master.gain.cancelScheduledValues(this.context.currentTime); this.master.gain.setTargetAtTime(value, this.context.currentTime, 0.08); } }
  async pause() { if (this.context) await this.context.suspend(); }
  async dispose() { this.sources.forEach(s => s.stop()); this.sources = []; await this.context?.close(); this.context = undefined; this.master = undefined; }
}
