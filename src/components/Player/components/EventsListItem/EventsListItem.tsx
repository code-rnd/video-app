import { FC, memo, useMemo } from "react";

import s from "./EventsListItem.module.scss";
import { millisToMinutesAndSeconds } from "../../utils";
import { cn } from "../../../../shared/utils";
import { useEvents } from "../../../../shared/contexts";
import { EventDto } from "../../../../shared/http/dto";

export const EventsListItem: FC<{
  event: EventDto;
}> = memo(({ event }) => {
  const { timestamp } = event;
  const { setCurrentEvent, currentEvent } = useEvents();

  const isActive = useMemo(
    () => currentEvent?.id === event.id,
    [currentEvent?.id, event.id]
  );

  return (
    <div
      className={cn([s.container, isActive && s.isActive])}
      onClick={() => setCurrentEvent(event)}
    >
      <div className={s.title}>Event: {event.id}</div>
      <div className={s.subTitle}>{millisToMinutesAndSeconds(timestamp)}</div>
    </div>
  );
});

EventsListItem.displayName = "EventsListItem";
