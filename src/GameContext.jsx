import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  function countScore() {
    return setScore((preScore) => preScore + 1);
  }

  const value = { score, countScore };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("UseGame must be used in GameProvider");
  return context;
}
