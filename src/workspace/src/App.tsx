import { useState } from "react"
import "./styles/common.css"
import "./styles/index.css"
import "./styles/result.css"
import { Game } from "./components/Game"
import { Route } from "./types/route"
import { Result } from "./components/Result"

function App() {
  const [route, setRoute] = useState<Route>("game")
  const [score, setScore] = useState<number>(0)

  const router = () => {
    if (route === "game") {
      return <Game setRoute={setRoute} setScore={setScore} score={score} />
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
