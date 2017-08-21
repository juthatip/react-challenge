import React from 'react'
import { NavLink } from 'react-router-dom'

export default ()=> {
  return (
    <ul>
     <li>
      <NavLink to="/start">Player</NavLink>
      <NavLink to="/shop">Shop</NavLink>
     </li>
    </ul>
  )
}