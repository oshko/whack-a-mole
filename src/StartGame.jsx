import { useGame } from "./GameContext";
export default function StartGame() {
  const { setPlaying } = useGame();
  return (
    <>
      <h2>Welcome to Whack a Mole Game</h2>
      <p>Whack a mole to earn points. How many can you get?</p>
      <h4>High Score: </h4>
      <button
        onClick={() =>
          setPlaying((playing) => (playing === false ? true : false))
        }
      >
        Start the Game!
      </button>
    </>
  );
}
