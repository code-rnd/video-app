import { forwardRef } from "react";
import s from "./Canvas.module.scss";
export const Canvas = forwardRef<HTMLCanvasElement, { togglePlay: () => void }>(
  ({ togglePlay }, ref) => {
    return (
      <canvas
        className={s.container}
        width={928}
        height={522}
        ref={ref}
        onClick={() => togglePlay()}
      />
    );
  }
);

Canvas.displayName = "Canvas";
