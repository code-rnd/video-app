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

//  const fps = 24;
// const width = 1_280;
// const height = 720;
// const second = 1_000;
