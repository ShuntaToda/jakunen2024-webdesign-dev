import React, { useCallback, useEffect, useState } from "react";
import { CellValue, Field, FieldRow } from "../types/field"
import { Route } from "../types/route"
import { fetchField } from "../apis/field";
import { PlayerDirection } from "../types/playerDirction";

interface GameProps {
  setRoute: React.Dispatch<React.SetStateAction<Route>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export const Game: React.FC<GameProps> = ({ setRoute, setScore, score }) => {
  const numberOfRows = 12
  const playerRowPlace = 2
  const [field, setField] = useState<Field>((): Field => {
    const row: FieldRow = [0, 0, 0]
    const playerRow: FieldRow = [0, 4, 0]
    const newField: Field = []
    for (let i = 0; i < numberOfRows; i++) {
      i !== playerRowPlace ? newField.push(row) : newField.push(playerRow)
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
        return <div className="tile stump"></div>;
      case 2:
        return <div className="tile flower"></div>;
      case 3:
        return <div className="tile mushroom"></div>;
      case 4:
        return <div className="tile player"></div>;
    }
  }

  const movePlayer = (direction: PlayerDirection) => {

    setField((prevField) => {
      const newField: Field = prevField.map(row => [...row]);
      const playerIndex = newField[playerRowPlace].findIndex(cell => cell === 4)
      switch (direction) {
        case "ArrowLeft":
          if (playerIndex !== 0) {
            newField[playerRowPlace][playerIndex] = 0
            newField[playerRowPlace][playerIndex - 1] = 4
          }

          return [...newField]
        case "ArrowRight":
          if (playerIndex < newField[playerRowPlace].length - 1) {
            newField[playerRowPlace][playerIndex] = 0
            newField[playerRowPlace][playerIndex + 1] = 4
          }
          return [...newField]
      }
    })
  }


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") movePlayer(e.key as PlayerDirection)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      <div className="score">{score.toString().padStart(8, '0')}</div>
      <div className="field">
        {field.map((row, index) => (
          <React.Fragment key={`row-${index}`}>
            <div className="tile rock"></div>
            {row.map((cell, cellIndex) => {
              return (
                <React.Fragment key={cellIndex}>
                  {selectCellType(cell)}
                </React.Fragment>
              )
            })}
            <div className="tile rock"></div>
          </React.Fragment>
        ))}

        {/* <div className="tile enemy"></div>
        <div className="tile stump"></div>
        <div className="tile player"></div> */}
      </div>
    </>
  )
}
