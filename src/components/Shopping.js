import React from 'react'

export default ({money, selectedItem}) => {
    console.log("compoent", selectedItem)
    return (
        <div>
           {/* $ <h1>{props.money}</h1> */}
           <h1>$ {money}</h1>
           
        </div>
    )
}