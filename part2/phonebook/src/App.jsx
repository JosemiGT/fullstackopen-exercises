import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    const filteredPersons = persons.filter(persons => persons.name.toLowerCase().includes(filter.toLowerCase()))
    setFilteredPersons(filteredPersons)
  },[filter, persons])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return;
    }

    setPersons(persons.concat({
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1
    }))

    setNewName('')
    setNewNumber('')
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
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons
        persons={filteredPersons}
      />
    </div>
  )
}

export default App