import { useEvents } from "../../../../../shared/contexts";
import { useEffect } from "react";

export const useCheckCurrentEvent = (timestamp: number) => {
  const { setCurrentEvent, events, currentEvent } = useEvents();

  useEffect(() => {
    const event = events.find((event) => {
      const currentTime = timestamp;
      const timeStart = event.timestamp / 1_000;
      const timeEnd = (event.timestamp + event.duration) / 1_000;

      return currentTime >= timeStart && currentTime <= timeEnd;
    });

    if (event) {
      setCurrentEvent(event);
    } else {
      setCurrentEvent(null);
    }
  }, [currentEvent, events, setCurrentEvent, timestamp]);
};
