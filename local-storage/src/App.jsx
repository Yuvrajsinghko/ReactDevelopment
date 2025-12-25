import React from 'react'

const App = () => {
  const user = {
    name:'Yuvraj',
    age:25,
    gender:'male'
  }
  localStorage.setItem('user',JSON.stringify(user))
  
  const user1 = JSON.parse(localStorage.getItem("user"));
  console.log(user1);
  

  return (
    <div className='text-4xl font-extrabold h-screen bg-cyan-800'>
      App
    </div>
  )
}

export default App