import { useEffect, useState } from "react"
import { fetchField } from "./apis/field"
import "./styles/common.css"
import "./styles/index.css"
import "./styles/result.css"
import { Field } from "./types/field"
import { Game } from "./components/Game"
import { Route } from "./types/route"

function App() {
  const [route, setRoute] = useState<Route>("game")
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
        <Game />
      </div>
    </>
  )
}

export default App
