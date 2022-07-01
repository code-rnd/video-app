import { FC, memo } from "react";
import * as apiTypes from "../../../../shared/http/apiTypes";
import { EventsListItem } from "../EventsListItem";
import s from "./EventsList.module.scss";
import { height } from "../VideoCanvas/VideoCanvas.constants";

export const EventsList: FC<{ eventsList: apiTypes.EventDto[] }> = memo(
  ({ eventsList }) => (
    <div className={s.container} style={{ height: height }}>
      <div className={s.header}>
        Эпизоды {eventsList.length} из {eventsList.length}
      </div>
      <div className={s.list}>
        {eventsList.map((event) => {
          return <EventsListItem event={event} key={event.id} />;
        })}
      </div>
    </div>
  )
);

EventsList.displayName = "EventsList";
