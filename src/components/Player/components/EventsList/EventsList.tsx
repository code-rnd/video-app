import { FC, memo } from "react";
import * as apiTypes from "../../../../shared/http/apiTypes";
import { EventsListItem } from "../EventsListItem";
import s from "./EventsList.module.scss";

export const EventsList: FC<{ eventsList: apiTypes.EventDto[] }> = memo(
  ({ eventsList }) => (
    <div className={s.container}>
      <div className={s.header}>Эпизоды</div>
      <div className={s.list}>
        {eventsList.map((event) => {
          return <EventsListItem event={event} key={event.id} />;
        })}
      </div>
    </div>
  )
);

EventsList.displayName = "EventsList";
