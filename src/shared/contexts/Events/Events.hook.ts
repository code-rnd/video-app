import { useContext } from "react";
import { EventsContext } from "./Events.context";

export const useEvents = () => useContext(EventsContext);
