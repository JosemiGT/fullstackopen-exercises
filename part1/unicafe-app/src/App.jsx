import { useState } from 'react'

const Button = ({handleButton, text}) => {
  return (<button onClick={handleButton}> {text} </button>)
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleButton={() => (setGood(good + 1))} text="good"></Button>
      <Button handleButton={() => (setNeutral(neutral + 1))} text="neutral"></Button>
      <Button handleButton={() => (setBad(bad + 1))} text="bad"></Button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

export default App