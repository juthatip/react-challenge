import React from 'react'
import Col from './Col'

export default ({data, handleFight, battle, index}) => {

    // const className = battle[index] ? 'hide' : 'show'

  return(
    <div>
        {data.map((i, k)=> {
            return(
            <ul key={k}>
                <Col data={i} index={k}/>
            </ul>
            )
        })}
        <button onClick={handleFight} value={index}>Fight!</button>
        <br />
    </div>
  )
}
