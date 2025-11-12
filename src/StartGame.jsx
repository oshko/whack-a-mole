import { useGame } from "./GameContext";

export default function StartGame() {
  const { setPlaying, highScore, resetScore } = useGame();

  function handleStart() {
    resetScore();
    setPlaying(true);
  }

  return (
    <div className="start-game">
      <h2>Welcome to Whack a Mole Game</h2>
      <p>Whack a mole to earn points. How many can you get?</p>
      <h4>High Score: {highScore}</h4>
      <button onClick={handleStart}>Start the Game!</button>
    </div>
  );
}
