import { useState } from "react";
import Field from "./Field";
import GameControl from "./GameControl.jsx";
import StartGame from "./StartGame.jsx";

export default function App() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <>
        <GameControl />
        <Field />
      </>
    );
  }

  return <StartGame playing={playing} setPlaying={setPlaying} />;
}
