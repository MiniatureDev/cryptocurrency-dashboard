import React, { useState } from 'react'
import Dashboard from './components/Dashboard';

function Main() {
   const[choice, setChoice] = useState("dashboard");

  return (
    <div className='container ml-5 mt-3'>
      <div className='row'>
        <button className='btn btn-outline-primary'
          onClick={()=>{
            setChoice("dashboard")
          }}
        >
          <h1>Dashboard</h1>
        </button>
        <button className='btn btn-outline-primary'
          onClick={()=>{
            setChoice("chart")
          }}
        >
          <h1>Chart</h1>
        </button>
      </div>
          {choice=="dashboard"?<Dashboard/>:<h1>chart</h1>}
    </div>
  )
}

export default Main