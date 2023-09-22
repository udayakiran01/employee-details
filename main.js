import React from 'react'
import Benz from '../assests/Benz.mp4'
import { useNavigate } from 'react-router'

const Main = () =>{
const navigate = useNavigate()

  return (
    <div className='main'>
      
        <video src={Benz} autoPlay loop muted/>
        <div className='content'>
          <h1>Welcome</h1>
          <button onClick={() => navigate("/Listdep")}>Let's Start</button>
        </div>
    </div>
  )
}

export default Main