import React from 'react'
import Col from './Col'

export default ({data, handleFight}) => {
  return(
    <div>
        {data.map((i, k)=> {
            return(
            <ul key={k}>
                <Col data={i} index={k}/>
            </ul>
            )
        })}
        <button onClick={handleFight}>Fight!</button>
        <br />
    </div>
  )
}
