import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 23410912
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return;
    }

    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }))

    setNewName('')
    setNewNumber('')
  }

  const handleOnChangeName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign : 'center',
      "justifyContent" : 'center',
      width: '100%'
    }}>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label 
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign : 'center',
          "justifyContent" : 'center'
        }}>
          name:
          <input 
            value={newName}
            onChange={handleOnChangeName}
          />
        </label>
        <label 
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign : 'center',
          "justifyContent" : 'center'
        }}>
          number:
          <input 
            value={newNumber}
            onChange={e => setNewNumber(e.target.value)}
          />
        </label>
        <div>
          <button 
            type="submit">
              add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons && persons.map(person => <p key={person.name}>{person.name} - {person.number}</p>)}
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
    </div>
  )
}

export default App