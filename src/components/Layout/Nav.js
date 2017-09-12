import React from 'react'
import { NavLink } from 'react-router-dom'

export default ()=> {
  return (
    <ul>
      <li><NavLink to="/start">Player</NavLink></li>
      <li><NavLink to="/enemy">Enemy</NavLink></li>
      <li><NavLink to="/training">Training</NavLink></li>
      <li><NavLink to="/shop">Shop</NavLink></li>
      <li><NavLink to="/storage">Storage</NavLink></li>
    </ul>
  )
}