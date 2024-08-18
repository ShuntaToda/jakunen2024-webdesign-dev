import { useEffect, useState } from "react";
import { CellValue, Field } from "../types/field"
import { Route } from "../types/route"
import { fetchField } from "../apis/field";

interface GameProps {
  setRoute: React.Dispatch<React.SetStateAction<Route>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export const Game: React.FC<GameProps> = ({ setRoute, setScore, score }) => {


  const [field, setField] = useState<Field>([])

  useEffect(() => {
    const getField = async () => {
      const data = await fetchField()
      setField(data)
    }
    getField()
  }, [])

  const selectCellType = (type: CellValue) => {
    switch (type) {
      case 0:
        return <div className="tile"></div>;
      case 1:
        return <div className="tile rock"></div>;
      case 2:
        return <div className="tile flower"></div>;
      case 3:
        return <div className="tile mushroom"></div>;
    }
  }
  return (
    <>
      <div className="score">{score.toString().padStart(8, '0')}</div>
      <div className="field">
        {field.map(row => {
          return row.map(cell => {
            return selectCellType(cell)
          })
        })}
        {/* <div className="tile enemy"></div>
        <div className="tile stump"></div>
        <div className="tile player"></div> */}
      </div>
    </>
  )
}
