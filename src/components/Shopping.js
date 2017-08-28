import React from 'react'

export default ({currentMoney, storeItem}) => {

    return (
        <div>
           {/* $ <h1>{props.money}</h1> */}
           <h1>$ {currentMoney}</h1>
        </div>
    )
}