import { forwardRef } from "react";
import s from "./Canvas.module.scss";
import { height, width } from "../../VideoCanvas.constants";
export const Canvas = forwardRef<HTMLCanvasElement, { togglePlay: () => void }>(
  ({ togglePlay }, ref) => {
    return (
      <canvas
        className={s.container}
        width={width}
        height={height}
        ref={ref}
        onClick={() => togglePlay()}
      />
    );
  }
);

Canvas.displayName = "Canvas";
