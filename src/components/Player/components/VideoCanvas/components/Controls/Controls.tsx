import { FC, memo, useMemo } from "react";
import s from "./Controls.module.scss";
import { millisToMinutesAndSeconds } from "../../../../utils";
import { useEvents } from "../../../../../../shared/contexts";
import { ControlsModel } from "./Controls.model";
import { checkCurrentEvent } from "../../utils";

const second = 1_000;
export const Controls: FC<ControlsModel> = memo(
  ({ currentStamp, duration }) => {
    const { events } = useEvents();

    const currentChapter = useMemo(() => {
      return checkCurrentEvent(events, currentStamp);
    }, [currentStamp, events]);

    const stampSecond = millisToMinutesAndSeconds(
      Math.round(currentStamp * second)
    );
    const durationSecond = millisToMinutesAndSeconds(
      Math.round(duration * second)
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

Controls.displayName = "Controls";
