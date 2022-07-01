import { RefObject, useCallback, useEffect } from "react";
import { useEvents } from "../../../../../shared/contexts";

const second = 1_000;

export const usePlayerControls = (video: RefObject<HTMLVideoElement>) => {
  const { currentEvent } = useEvents();

  const togglePlay = useCallback(() => {
    const isPaused = video?.current?.paused;
    if (isPaused) {
      video.current.play();
    } else {
      video?.current?.pause();
    }
  }, [video]);

  useEffect(() => {
    if (currentEvent && video?.current) {
      video.current.currentTime = currentEvent.timestamp / second;
      video.current.play();
    }
  }, [video, currentEvent]);

  return {
    togglePlay,
  };
};
