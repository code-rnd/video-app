import { FC, memo, ReactNode } from "react";
import { EventsContextProvider } from "../../contexts";

export const Providers: FC<{ children: ReactNode }> = memo(({ children }) => {
  return <EventsContextProvider>{children}</EventsContextProvider>;
});
