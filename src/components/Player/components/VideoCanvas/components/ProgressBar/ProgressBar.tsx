import { FC, memo, MouseEvent, useCallback, useMemo } from "react";
import s from "./ProgressBar.module.scss";
import { EventDto } from "../../../../../../shared/http/dto";

interface ProgressBarModel {
  stamp: number;
  duration: number;
  eventsList?: EventDto[];
  changeTimecode: (stamp: number) => void;
}

const initialEventsList: EventDto[] = [];

export const ProgressBar: FC<ProgressBarModel> = memo(
  ({ stamp, duration, eventsList = initialEventsList, changeTimecode }) => {
    const currentPercent = useMemo(
      () => 100 - (stamp * 100) / duration,
      [duration, stamp]
    );

    const handleClick = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        const width = event.currentTarget.offsetWidth;
        const currentWidth = event.screenX - 40;
        const currentWidthPercent = (currentWidth * 100) / width;

        changeTimecode(currentWidthPercent);
      },
      [changeTimecode]
    );

    return (
      <div className={s.container}>
        <div className={s.progressBar} onClick={handleClick}>
          <div className={s.marker} style={{ right: `${currentPercent}%` }} />
        </div>
      </div>
    );
  }
);
