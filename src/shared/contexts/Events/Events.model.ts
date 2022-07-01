import * as apiTypes from "../../http/apiTypes";

export interface EventsContextModel {
  currentEvent: apiTypes.EventDto | null;
  events: apiTypes.EventDto[];
  isLoading: boolean;

  fetchEvents: () => void;
  setCurrentEvent: (event: apiTypes.EventDto | null) => void;
}
