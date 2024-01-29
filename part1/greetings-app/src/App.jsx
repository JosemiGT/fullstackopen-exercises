
const Hello = (props) => {  
  console.log(props)
  return (    
    <div>      
      <p>
      Hello {props.name}, you are {props.age} years old
        </p>    
    </div>  
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/JosemiGT'>JosemiGT</a>
    </div>
  )
}

const App = () => {

  const name = "JosemiGT"
  const age = 30

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name='Encarni' age={18+10}/>
      <Footer />
    </>
  )
}

export default App
