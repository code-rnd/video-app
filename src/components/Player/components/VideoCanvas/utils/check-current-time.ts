import { EventDto } from "../../../../../shared/http/dto";

const second = 1_000;
export const checkCurrentEvent = (
  events: EventDto[],
  timestamp: number
): EventDto | undefined => {
  return events.find((event) => {
    const currentTime = timestamp;
    const timeStart = event.timestamp / second;
    const timeEnd = (event.timestamp + event.duration) / second;

    return currentTime >= timeStart && currentTime <= timeEnd;
  });
};
