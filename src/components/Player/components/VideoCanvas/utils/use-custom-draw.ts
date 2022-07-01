import { RefObject, useEffect } from "react";
import { useEvents } from "../../../../../shared/contexts";

export const useCustomDraw = (
  timestamp: number,
  canvas: RefObject<HTMLCanvasElement>
) => {
  const { currentEvent } = useEvents();

  useEffect(() => {
    if (currentEvent?.id && timestamp) {
      const { left, top, width, height } = currentEvent.zone;
      const ctx = canvas?.current?.getContext("2d");
      if (ctx) {
        ctx.strokeRect(left, top, width, height);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#90FF90";
      }
    }
  }, [canvas, currentEvent, timestamp]);
};
