import { useEffect, useState } from "react"
import { fetchField } from "./apis/field"
import "./styles/common.css"
import "./styles/index.css"
import "./styles/result.css"
import { Field } from "./types/field"

function App() {
  const [field, setField] = useState<Field>([])


  useEffect(() => {
    const getField = async () => {
      const data = await fetchField()
      setField(data)
    }
    getField()
  }, [])

  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}

export default App
