import { Field } from "../types/field"
import { Route } from "../types/route"

interface GameProps {
  setRoute: React.Dispatch<React.SetStateAction<Route>>;
  field: Field;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export const Game: React.FC<GameProps> = ({ setRoute, field, setScore, score }) => {
  return (
    <>
      <div className="score">00012340</div>
      <div className="field">
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile enemy"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile flower"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile player"></div>
        <div className="tile mushroom"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile stump"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile flower"></div>
        <div className="tile"></div>
        <div className="tile stump"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile stump"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile mushroom"></div>
        <div className="tile"></div>
        <div className="tile rock"></div>
        <div className="tile rock"></div>
        <div className="tile"></div>
        <div className="tile stump"></div>
        <div className="tile flower"></div>
        <div className="tile rock"></div>
      </div>
    </>
  )
}
