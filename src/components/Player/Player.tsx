import { FC, memo, useEffect } from "react";
import { EventsList, VideoCanvas } from "./components";
import s from "./Player.module.scss";
import { useEvents } from "../../shared/contexts";

export const Player: FC = memo(() => {
  const { fetchEvents, events } = useEvents();

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.container}>
      <VideoCanvas />
      <EventsList eventsList={events} />
    </div>
  );
});

Player.displayName = "Player";
