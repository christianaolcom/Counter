import { useState } from 'react';
import Navbar from './Components/Navbar'
import './App.css'



function App() {
  // let stylee = {color: '#foo', fontWeight:900}
  // let name = 'Joseph'
  // console.log(name);

  // const time = new Date().toLocaleTimeString
  // console.log(time);
  
  const [num, setnum] = useState(0)
  const [stop, setstop] = useState('')
  const Increment = () =>{
    if (num >= 10) {
      setstop('Number cannot exceed beyond 10')
      setTimeout(() => {
        setstop(false)
      }, [3000]);
    }
    else{
      setnum(num + 1)
    }
  }

  
  const Decrement = () => {
    if (num >= 100){
      setTimeout(() => {
      }, [3000]);
    }
    else {
      setnum(num +1)
    }
  }


  return (
    <>
    
        {/* <p style={stylee}>Hello World!</p>
        <Navbar/>
        <h1>Welcome, {name}, the time is {time}</h1> */}
        <p className='fs-1 text-center'>Controlled Counter</p>
        <p className='text-center fs-2 text danger m-5'>{num}</p>
        <p>{stop}</p>

        <div>
        <button onClick={Increment} className='btn mx-2 btn-success  fw-bold'> Increment +</button>
        <button onClick={Decrement} className='btn mx-2 btn-danger fw-bold'> Decrement -</button>
        </div>
    </>
  )
}



export default App

// const Increment = () => {
//   setnum(num+1)