import Field from "./Field";
import GameControl from "./GameControl.jsx";
import StartGame from "./StartGame.jsx";
import { useGame } from "./GameContext.jsx";

export default function App() {
  const { playing } = useGame();

  if (playing) {
    return (
      <>
        <GameControl />
        <Field />
      </>
    );
  }

  return <StartGame />;
}
