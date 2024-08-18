import { useEffect, useState } from "react";
import { CellValue, Field, FieldRow } from "../types/field"
import { Route } from "../types/route"
import { fetchField } from "../apis/field";

interface GameProps {
  setRoute: React.Dispatch<React.SetStateAction<Route>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export const Game: React.FC<GameProps> = ({ setRoute, setScore, score }) => {
  const numberOfRows = 12
  const [field, setField] = useState<Field>((): Field => {
    const row: FieldRow = [0, 0, 0]
    const playerRow: FieldRow = [0, 4, 0]
    const newField: Field = []
    for (let i = 0; i < numberOfRows; i++) {
      i !== 2 ? newField.push(row) : newField.push(playerRow)
    }
    return newField
  })
  const [fieldCount, setFieldCount] = useState<number>(0)
  const [objData, setObjData] = useState<Field>([])

  useEffect(() => {
    const getObj = async () => {
      const data = await fetchField()
      setObjData(data)
    }
    getObj()
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
      case 4:
        return <div className="tile player"></div>;
    }
  }
  return (
    <>
      <div className="score">{score.toString().padStart(8, '0')}</div>
      <div className="field">
        {objData.map(row => {
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
