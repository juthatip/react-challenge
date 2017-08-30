import React from 'react'

export default ({currentMoney, storeItem}) => {

    let items = !storeItem ? [] : storeItem
    
    console.log(storeItem)
    return (
        <div>
           <h1>$ {currentMoney}</h1>
           <ul>
            <li>meat : { items.meat }</li>
            <li>water : { items.water }</li>
            <li>candy : { items.candy }</li>
           </ul>
        </div>
    )
}