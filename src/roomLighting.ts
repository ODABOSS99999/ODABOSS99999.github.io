export type LightingWeights = { daylight: number; lamplight: number; darkroom: number };

const targetFor = (mode: string): LightingWeights => ({
  daylight: mode === 'daylight' ? 1 : 0,
  lamplight: mode !== 'daylight' && mode !== 'darkroom' ? 1 : 0,
  darkroom: mode === 'darkroom' ? 1 : 0,
});

/** One shared clock keeps every light, backdrop and illustrated material in step. */
export function createLightingTransition(initialMode: string, duration = 800) {
  let mode = initialMode;
  let from = targetFor(mode), target = targetFor(mode), started = 0;
  const sample = (time: number): LightingWeights => {
    const progress = Math.max(0, Math.min(1, (time - started) / duration));
    const eased = progress * progress * (3 - 2 * progress);
    return {
      daylight: from.daylight + (target.daylight - from.daylight) * eased,
      lamplight: from.lamplight + (target.lamplight - from.lamplight) * eased,
      darkroom: from.darkroom + (target.darkroom - from.darkroom) * eased,
    };
  };
  return {
    update(nextMode: string, time: number, motion: boolean): LightingWeights {
      if (nextMode !== mode) {
        from = sample(time);
        mode = nextMode;
        target = targetFor(mode);
        started = time;
      }
      if (!motion) from = { ...target };
      return sample(time);
    },
  };
}

export const blendLight = (weights: LightingWeights, day: number, lamp: number, dark: number) =>
  weights.daylight * day + weights.lamplight * lamp + weights.darkroom * dark;
