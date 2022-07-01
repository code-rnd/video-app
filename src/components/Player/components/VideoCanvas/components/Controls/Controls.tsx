import { FC, memo, useMemo } from "react";
import s from "./Controls.module.scss";
import { millisToMinutesAndSeconds } from "../../../../utils";
import { useEvents } from "../../../../../../shared/contexts";

interface ControlsModel {
  currentStamp: number;
  duration: number;
}

export const Controls: FC<ControlsModel> = memo(
  ({ currentStamp, duration }) => {
    const { events } = useEvents();

    const currentChapter = useMemo(() => {
      return events.find(({ timestamp, duration, id }) => {
        const currentTime = currentStamp;
        const timeStart = timestamp / 1_000;
        const timeEnd = (timestamp + duration) / 1_000;

        return currentTime >= timeStart && currentTime <= timeEnd;
      });
    }, [currentStamp, events]);

    const stampSecond = millisToMinutesAndSeconds(
      Math.round(currentStamp * 1_000)
    );
    const durationSecond = millisToMinutesAndSeconds(
      Math.round(duration * 1_000)
    );

    return (
      <div className={s.container}>
        <div className={s.timeView}>
          {stampSecond} / {durationSecond}
        </div>
        {currentChapter && (
          <>
            ·<div className={s.chapterView}>Эпизод {currentChapter.id}</div>
          </>
        )}
      </div>
    );
  }
);
