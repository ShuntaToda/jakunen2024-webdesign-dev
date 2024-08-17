import { useEffect, useState } from "react"
import { fetchField } from "./apis/field"
import "./styles/common.css"
import "./styles/index.css"
import "./styles/result.css"
import { Field } from "./types/field"
import { Game } from "./components/Game"
import { Route } from "./types/route"
import { Result } from "./components/Result"

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

  const router = () => {
    if (route === "game") {
      return <Game />
    } else if (route === "result") {
      return <Result />
    }
  }

  return (
    <>
      <div className="container">
        {router()}
      </div>
    </>
  )
}

export default App
