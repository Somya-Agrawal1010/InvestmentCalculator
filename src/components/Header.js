import React from 'react'
import logo from '../image/calculator-LOGO.jpg'
import '../components/Header.css'


const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src  = {logo} alt = '...'/>
        <h1 style={{color: 'white'}}>Investment Calculator</h1>
      </header>
    </div>
  )
}

export default Header
