import React from "react";
import { Player } from "./components";
import "./App.style.scss";
import { Providers } from "./shared/components";

function App() {
  return (
    <Providers>
      <Player />
    </Providers>
  );
}

export default App;
