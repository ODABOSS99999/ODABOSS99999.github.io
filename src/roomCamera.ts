export type RoomView = { yaw: number; pitch: number };
export const roomYawLimit = 1.05;

export function clampRoomYaw(yaw: number) {
  return Math.max(-roomYawLimit, Math.min(roomYawLimit, yaw));
}

export function getRoomCameraFraming(aspect: number) {
  const portrait = aspect < 0.85;
  return {
    portrait,
    fov: portrait ? 66 : 57,
    z: portrait
      ? Math.max(8, 9.5 / (2 * Math.tan((33 * Math.PI) / 180) * Math.max(aspect, 0.25)) - 5)
      : 6.8,
    seatScale: portrait ? 0.72 : 1,
  };
}

export function roomMotionEnabled(preference: boolean, reducedMotion: boolean, visible: boolean) {
  return preference && !reducedMotion && visible;
}

export function advanceRoomView(current: RoomView, target: RoomView, elapsedSeconds: number, motion: boolean): RoomView {
  if (!motion) return target;
  const progress = 1 - Math.exp(-12 * Math.min(Math.max(elapsedSeconds, 0), 0.05));
  return {
    yaw: current.yaw + (target.yaw - current.yaw) * progress,
    pitch: current.pitch + (target.pitch - current.pitch) * progress,
  };
}
