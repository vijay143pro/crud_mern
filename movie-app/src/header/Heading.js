import React from 'react'
import './heading.css'
import { Link } from 'react-router-dom'
function Heading() {
  return (
    <div className='total-container'>
        <header className='heading'>
            <div className=' logo'><h1>S<span className='style-logo'>VR</span></h1></div>
            <Link to="form"><h2 className='signup'>Sign-up</h2></Link>
            <Link to="dash"><h2 className='dash'>Dashboard</h2></Link>
        </header>

    </div>
  )
}

export default Heading