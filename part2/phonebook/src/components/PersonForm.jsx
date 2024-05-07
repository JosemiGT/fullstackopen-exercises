/* eslint-disable react/prop-types */
export const PersonForm = ({newName, setNewName, newNumber, setNewNumber, handleSubmit}) => {
    return(
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
            onChange={e => setNewName(e.target.value)}
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
    )
}