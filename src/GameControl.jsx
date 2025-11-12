import { useGame } from "./GameContext";
export default function GameControl() {
  const { setPlaying, score } = useGame();
  return (
    <>
      <p>Your Score: {score}</p>
      <button
        onClick={() =>
          setPlaying((playing) => (playing === false ? true : false))
        }
      >
        Back to Scoreboard
      </button>
      <p>Whack a mole to earn points. How many can you get?</p>
    </>
  );
}
