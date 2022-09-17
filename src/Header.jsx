import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h2>I am a header page</h2>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
