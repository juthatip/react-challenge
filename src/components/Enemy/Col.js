import React from 'react'

export default ({data}) => {
  return (
    <li>
        <span>HP: {data.hp}</span>
        <span>Attack: {data.attack}</span>
        <span>Element: {data.element}</span>
    </li>
  )
}