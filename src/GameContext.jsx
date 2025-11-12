import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  function countScore() {
    console.log(score);
    return setScore((preScore) => preScore + 1);
  }
  //game field

  const NUM_HOLES = 9;
  const newField = Array(NUM_HOLES).fill(false);

  // Pick a random index for the mole
  let mole = Math.floor(Math.random() * NUM_HOLES);
  newField[mole] = true;

  const value = { score, countScore, playing, setPlaying, newField };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("UseGame must be used in GameProvider");
  return context;
}
