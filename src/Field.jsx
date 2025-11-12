import { useGame } from "./GameContext";
export default function Field() {
  const { score, newField, countScore } = useGame();
  return (
    <ul className="field">
      {newField.map((hasMole, i) => (
        <li
          key={i}
          className={`hole${hasMole ? " mole" : ""}`}
          onClick={() => (hasMole === true ? countScore() : score)}
        ></li>
      ))}
    </ul>
  );
}
