import React from 'react'

export default ({currentMoney, storeItem}) => {

    let items = !storeItem ? [] : storeItem 
    
    console.log(items)
    return (
        <div>
           <h1>$ {currentMoney}</h1>
           <ul>
            {items.map((item, n)  => <li key={n}>{item.selectedItem} : {item.numItem}</li>)}
           </ul>
        </div>
    )
}