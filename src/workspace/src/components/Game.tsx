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
            if (newField[playerRowPlace][playerIndex] === 2) setScore(prevScore => prevScore + 10)
            newField[playerRowPlace][playerIndex] = 0
            newField[playerRowPlace][playerIndex - 1] = 4
          }

          return [...newField]
        case "ArrowRight":
          if (playerIndex < newField[playerRowPlace].length - 1) {
            if (newField[playerRowPlace][playerIndex] === 2) setScore(prevScore => prevScore + 10)
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


  const updateField = useCallback(() => {
    setScore(prevScore => prevScore + 10)
    const newField: Field = field.map(row => [...row]);
    const playerPosition = newField[playerRowPlace].findIndex(cell => cell === 4)
    newField[playerRowPlace] = newField[playerRowPlace].map(cell => cell === 4 ? 0 : cell) as FieldRow
    newField.shift()
    if (objData[fieldCount] === undefined) {
      setFieldCount(0)
      newField.push(objData[0])
    } else {
      newField.push(objData[fieldCount])
    }

    // フィールド移動によるプレイヤー当たり判定
    if (newField[playerRowPlace][playerPosition] === 0) {
      newField[playerRowPlace][playerPosition] = 4
    } else if (newField[playerRowPlace][playerPosition] === 2) {
      setScore(prevScore => prevScore + 100)
      newField[playerRowPlace][playerPosition] = 4
    } else {
      newField[playerRowPlace][playerPosition] = 4
    }
    setField([...newField]);
    setFieldCount(count => count + 1)
  }, [objData, fieldCount, field]);

  useEffect(() => {
    const timeoutId = setInterval(updateField, 300);
    // クリーンアップ関数
    return () => {
      if (timeoutId) clearInterval(timeoutId);
    };
  }, [updateField]);

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
      </div>
    </>
  )
}
