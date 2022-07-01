import { useEvents } from "../../../../../shared/contexts";
import { useEffect } from "react";
import { checkCurrentEvent } from "./check-current-time";

export const useCheckCurrentEvent = (timestamp: number) => {
  const { setCurrentEvent, events, currentEvent } = useEvents();

  useEffect(() => {
    const event = checkCurrentEvent(events, timestamp);

    if (event) {
      setCurrentEvent(event);
    } else {
      setCurrentEvent(null);
    }
  }, [currentEvent, events, setCurrentEvent, timestamp]);
};
