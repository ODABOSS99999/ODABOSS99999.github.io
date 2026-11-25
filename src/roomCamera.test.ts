import { expect, it } from 'vitest';
import { advanceRoomView, clampRoomYaw, getRoomCameraFraming, roomMotionEnabled } from './roomCamera';

it('keeps the expanded room view within its reachable yaw range', () => {
  expect(clampRoomYaw(-2)).toBe(-1.05);
  expect(clampRoomYaw(2)).toBe(1.05);
  expect(clampRoomYaw(0.3)).toBe(0.3);
});

it('eases room turns toward their target and respects reduced motion', () => {
  const current = { yaw: 0, pitch: 0 };
  const target = { yaw: 0.4, pitch: -0.2 };
  const eased = advanceRoomView(current, target, 1 / 60, true);

  expect(eased.yaw).toBeGreaterThan(current.yaw);
  expect(eased.yaw).toBeLessThan(target.yaw);
  expect(eased.pitch).toBeLessThan(current.pitch);
  expect(eased.pitch).toBeGreaterThan(target.pitch);
  expect(advanceRoomView(current, target, 1 / 60, false)).toEqual(target);
});

it('frames a portrait room more openly while keeping its seated foreground', () => {
  const phone = getRoomCameraFraming(390 / 844);
  const desktop = getRoomCameraFraming(1440 / 900);
  expect(phone.portrait).toBe(true);
  expect(phone.fov).toBeGreaterThan(desktop.fov);
  expect(phone.z).toBeLessThan(12.2);
  expect(phone.seatScale).toBeGreaterThan(0.65);
  expect(desktop).toMatchObject({ portrait: false, fov: 57, z: 6.8, seatScale: 1 });
});

it('animates only when site motion is enabled, motion is not reduced, and the page is visible', () => {
  expect(roomMotionEnabled(true, false, true)).toBe(true);
  expect(roomMotionEnabled(false, false, true)).toBe(false);
  expect(roomMotionEnabled(true, true, true)).toBe(false);
  expect(roomMotionEnabled(true, false, false)).toBe(false);
});
