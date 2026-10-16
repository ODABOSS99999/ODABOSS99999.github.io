import { describe, expect, it } from 'vitest';
import { blendLight, createLightingTransition } from './roomLighting';

describe('room lighting transition', () => {
  it('starts at the saved lighting and reaches the new lighting in 800ms', () => {
    const light = createLightingTransition('lamplight');
    expect(light.update('lamplight', 100, true)).toEqual({ daylight: 0, lamplight: 1, darkroom: 0 });
    light.update('daylight', 200, true);
    expect(light.update('daylight', 600, true)).toEqual({ daylight: .5, lamplight: .5, darkroom: 0 });
    expect(light.update('daylight', 1000, true)).toEqual({ daylight: 1, lamplight: 0, darkroom: 0 });
  });
  it('retargets from the currently visible mixture with no color or intensity jump', () => {
    const light = createLightingTransition('lamplight');
    light.update('daylight', 0, true);
    const before = light.update('daylight', 300, true);
    expect(light.update('darkroom', 300, true)).toEqual(before);
    const middle = light.update('darkroom', 700, true);
    expect(middle.darkroom).toBe(.5);
    expect(middle.daylight + middle.lamplight + middle.darkroom).toBeCloseTo(1);
    expect(blendLight(middle, 2.8, 1.8, .7)).toBeGreaterThan(.7);
    expect(light.update('darkroom', 1100, true)).toEqual({ daylight: 0, lamplight: 0, darkroom: 1 });
  });
  it('snaps for disabled or reduced motion and does not resume an old transition', () => {
    const light = createLightingTransition('daylight');
    light.update('darkroom', 0, true);
    const dark = { daylight: 0, lamplight: 0, darkroom: 1 };
    expect(light.update('darkroom', 200, false)).toEqual(dark);
    expect(light.update('darkroom', 300, true)).toEqual(dark);
    expect(light.update('lamplight', 400, false)).toEqual({ daylight: 0, lamplight: 1, darkroom: 0 });
  });
});
