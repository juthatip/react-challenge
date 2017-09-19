import React from 'react'
import Col from './Col'

export default ({data, handleFight, battle, index}) => {

console.log("==>", battle)
  const className = battle ? 'hide' : 'show'

  return(
    <div>
        {data.map((i, k)=> {
            return(
            <ul key={k}>
                <Col data={i} index={k}/>
            </ul>
            )
        })}
        <button className={className} onClick={handleFight} value={index}>Fight!</button>
        <br />
    </div>
  )
}
