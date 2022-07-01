import React, { FC, ReactNode, useCallback, useState } from "react";

import * as apiTypes from "../../http/apiTypes";
import { EventsContext } from "./Events.context";
import { Api } from "../../http";
import { sorted } from "./Events.utils";
import { eventMocked } from "./Events.mocked";

export const EventsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<apiTypes.EventDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentEvent, setCurrentEvent] = useState<apiTypes.EventDto | null>(
    null
  );

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await Api.getEvents();
      setEvents([...sorted(data), eventMocked]);
    } catch (e) {
      console.log("При попытке получить список событий произошла ошибка: ", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        currentEvent,
        isLoading,

        fetchEvents,
        setCurrentEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
