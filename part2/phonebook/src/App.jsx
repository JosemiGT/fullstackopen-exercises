import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons(persons.concat({
      name: newName
    }))

    setNewName('')
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
          Name
          <input 
            value={newName}
            onChange={handleOnChangeName}
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
      {persons && persons.map(person => <p key={person.name}>{person.name}</p>)}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App