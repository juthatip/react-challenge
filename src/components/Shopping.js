import React from 'react'
import StoreItem from './StoreItem'

export default ({currentMoney, storeItem}) => {

    let items = !storeItem ? [] : storeItem
    // let items = {meat: 1, water: 1, candy: 1}
    // console.log(currentMoney)
    return (
        <div>
           <h1>$ {currentMoney}</h1>
           <ul>
            {/* <li>meat : { items.meat }</li>
            <li>water : { items.water }</li>
            <li>candy : { items.candy }</li> */}

            <StoreItem {...items} />

            {/* { items.meat ?  (<li>meat : {items.meat}</li>) : '' }
            { items.water ? (<li>water : {items.water}</li>) : '' }
            { items.candy ? (<li>candy : {items.candy}</li>) : '' } */}
           </ul>
        </div>
    )
}