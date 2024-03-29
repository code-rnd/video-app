import { FC, memo, MouseEvent, useCallback, useMemo } from "react";
import s from "./ProgressBar.module.scss";
import { ProgressBarModel } from "./ProgressBar.model";

export const ProgressBar: FC<ProgressBarModel> = memo(
  ({ stamp, duration, changeTimecode }) => {
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

    console.log(stamp);

    return (
      <div className={s.container}>
        <div className={s.progressBar} onClick={handleClick}>
          <div className={s.marker} style={{ right: `${currentPercent}%` }} />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
