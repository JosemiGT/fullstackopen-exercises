/* eslint-disable react/prop-types */

export const Filter = ({filter, setFilter}) => {
    return(
        <label 
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign : 'center',
          "justifyContent" : 'center'
        }}>
          filter shown with
          <input 
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </label>
    )
}