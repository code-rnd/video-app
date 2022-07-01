import { createContext } from "react";
import { EventsContextModel } from "./Events.model";

export const EventsContext = createContext<EventsContextModel>({
  events: [],
  currentEvent: null,
  isLoading: false,

  fetchEvents: () => {},
  setCurrentEvent: () => {},
});
