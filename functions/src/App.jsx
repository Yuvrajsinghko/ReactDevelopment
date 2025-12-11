import React from 'react'

const App = () => {
  const clicked=()=>{
    console.log("Heheuhu");
    
    
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={clicked}>Hii Click me</button>
    </div>
  )
}

export default App