import { useState } from 'react'

const Button = ({handleButton, text}) => {
  return (<button onClick={handleButton}> {text} </button>)
}

const StatisticsLine = ({statisticText, staticsValue}) => {
  return (
    <tr>
      <th scope="row">{statisticText}</th>
      <td>{staticsValue}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return(
    
    <>
      <thead>
      <tr>
        <th scope="col">Statistics type</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      <StatisticsLine statisticText="good" staticsValue={good}></StatisticsLine>
      <StatisticsLine statisticText="neutral" staticsValue={neutral}></StatisticsLine>
      <StatisticsLine statisticText="bad" staticsValue={bad}></StatisticsLine>
      <StatisticsLine statisticText="all" staticsValue={(good+neutral+bad)}></StatisticsLine>
      <StatisticsLine statisticText="average" staticsValue={(good*1+neutral*0+bad*-1)/3}></StatisticsLine>
      <StatisticsLine statisticText="positive" staticsValue={(good)/(good+neutral+bad)}></StatisticsLine>
    </tbody>
      </>
  )
}

const handleButton = (setValue, value) => {
  setValue(value +1 )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleButton={() => {handleButton(setGood, good)}} text="good"></Button>
      <Button handleButton={() => {handleButton(setNeutral, neutral)}} text="neutral"></Button>
      <Button handleButton={() => {handleButton(setBad, bad)}} text="bad"></Button>

      <h1>statistics</h1>
      {(good + neutral + bad > 0) 
        ? (<Statistics good={good} neutral={neutral} bad={bad}></Statistics> )
        : (<p>No feedback given</p> )}
    </>
  )
}

export default App