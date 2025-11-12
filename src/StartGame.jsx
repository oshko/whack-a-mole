export default function StartGame({ playing, setPlaying }) {
  return (
    <>
      <h2>Welcome to Whack a Mole Game</h2>
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
