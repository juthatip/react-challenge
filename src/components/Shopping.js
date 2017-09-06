import React from 'react'

export default ({currentMoney, storeItem}) => {

    let items = !storeItem ? [] : storeItem

    return (
        <div>
           <h1>$ {currentMoney}</h1>
           <ul>
            { items.meat ?  <li>meat : {items.meat}</li> : '' }
            { items.water ? <li>water : {items.water}</li> : '' }
            { items.candy ? <li>candy : {items.candy}</li> : '' }
           </ul>
        </div>
    )
}