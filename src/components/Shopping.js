import React from 'react'

export default ({currentMoney, storeItem, handleMeat}) => {

    let items = !storeItem ? [] : storeItem

    return (
        <div>
           <h1>$ {currentMoney}</h1>
           <ul>
            { items.meat ? <div><li>meat : {items.meat}</li><button onClick={handleMeat}>use (+50 stamina)</button></div> : '' }
            { items.water ? <li>water : {items.water}</li> : '' }
            { items.candy ? <li>candy : {items.candy}</li> : '' } 
           </ul>
        </div>
    )
}