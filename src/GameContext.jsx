import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  //score
  const [score, setScore] = useState(0);
  function countScore() {
    console.log(score);
    return setScore((preScore) => preScore + 1);
  }

  //high score
  const [highScore, setHighScore] = useState(0);
  function updateHighScore() {
    if (score > highScore) {
      setHighScore(score);
    }
  }

  // Reset score when starting new game
  function resetScore() {
    setScore(0);
  }

  //render based on play status
  const [playing, setPlaying] = useState(false);

  //game field
  const NUM_HOLES = 9;
  const newField = Array(NUM_HOLES).fill(false);

  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  // props to share
  const value = {
    score,
    countScore,
    playing,
    setPlaying,
    newField,
    highScore,
    updateHighScore,
    resetScore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("UseGame must be used in GameProvider");
  return context;
}
