import { FC, memo, useCallback, useRef } from "react";
import { Canvas, Controls, Video, ProgressBar } from "./components";
import { useVideoSync } from "./hooks";
import { usePlayerControls } from "./hooks/use-player-controls";
import s from "./VideoCanvas.module.scss";
import { useEvents } from "../../../../shared/contexts";

const second = 1_000;
export const VideoCanvas: FC = memo(() => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const { timestamp, duration } = useVideoSync(video, canvas);
  const { togglePlay } = usePlayerControls(video);
  const { setCurrentEvent } = useEvents();

  const changeTimecode = useCallback(
    (currentPercent: number) => {
      const timestamp = ((duration * currentPercent) / 100) * second;
      setCurrentEvent({ timestamp } as any);
    },
    [duration, setCurrentEvent]
  );

  return (
    <div className={s.container}>
      <Video ref={video} />
      <Canvas togglePlay={togglePlay} ref={canvas} />
      <ProgressBar
        stamp={timestamp}
        duration={duration}
        changeTimecode={changeTimecode}
      />
      <Controls currentStamp={timestamp} duration={duration} />
    </div>
  );
});

VideoCanvas.displayName = "VideoCanvas";
