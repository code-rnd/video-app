import { RefObject, useEffect, useRef, useState } from "react";
import { fps, height, width } from "../VideoCanvas.constants";
import { useCheckCurrentEvent, useCustomDraw } from "../utils";

export const useVideoSync = (
  video: RefObject<HTMLVideoElement>,
  canvas: RefObject<HTMLCanvasElement>
) => {
  const [timestamp, setTimestamp] = useState(0);
  const [duration, setDuration] = useState(0);

  useCheckCurrentEvent(timestamp);
  useCustomDraw(timestamp, canvas);

  const timer = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    const drawImage = () => {
      if (!canvas?.current || !video?.current) return;

      if (video.current.paused && timer?.current) {
        clearInterval(timer.current);
        return;
      }

      setTimestamp(video.current.currentTime);

      canvas.current
        ?.getContext("2d", { alpha: false })
        ?.drawImage(video.current, 0, 0, width, height);
    };

    if (!canvas?.current || !video?.current) return;

    timer.current = setInterval(() => {
      if (video?.current?.paused && timer?.current) {
        clearInterval(timer.current);
        return;
      }
      drawImage();
    }, 1000 / fps);
    video.current.onpause = function () {
      timer?.current && clearInterval(timer.current);
    };

    video.current.onended = function () {
      timer?.current && clearInterval(timer.current);
    };
    video.current.onplay = function () {
      setDuration(video?.current?.duration || 0);
      timer?.current && clearInterval(timer.current);
      timer.current = setInterval(() => {
        drawImage();
      }, 1000 / fps);

      return () => timer.current && clearTimeout(timer.current);
    };
  }, [video, canvas]);

  return {
    timestamp,
    duration,
  };
};
