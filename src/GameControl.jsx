import { useGame } from "./GameContext";

export default function GameControl() {
  const { setPlaying, score, updateHighScore } = useGame();

  function handleRestart() {
    updateHighScore();
    setPlaying(false);
  }

  return (
    <div className="game-control">
      <p>Your Score: {score}</p>
      <button onClick={handleRestart}>RESTART and Back to Scoreboard</button>
      <p>Whack a mole to earn points. How many can you get?</p>
    </div>
  );
}
