import {act, renderHook, waitFor} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import {useRoomSound} from './useRoomSound';

const audio = vi.hoisted(() => ({
  start: vi.fn(async () => {}),
  pause: vi.fn(async () => {}),
  dispose: vi.fn(async () => {}),
  volume: vi.fn(),
  effect: vi.fn(),
}));

vi.mock('./audio', () => ({
  RoomAudio: vi.fn(function () {
    return audio;
  }),
}));

afterEach(() => vi.clearAllMocks());

describe('room sound playback control', () => {
  it('starts audio directly from the explicit unmute gesture', async () => {
    const setMuted = vi.fn();
    const {result, unmount} = renderHook(() => useRoomSound(true, 0.3, setMuted));

    act(() => result.current.toggle());

    expect(setMuted).toHaveBeenCalledWith(false);
    expect(audio.start).toHaveBeenCalledOnce();
    await waitFor(() => expect(result.current.playing).toBe(true));
    unmount();
    expect(audio.dispose).toHaveBeenCalledOnce();
  });
});
