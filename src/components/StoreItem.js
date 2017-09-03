import React from 'react'

export default (props) => {
    const item = (props) ? props : ''
    return (
        <div>
            { item.meat ?  (<li>meat : {item.meat}</li>) : '' }
            { item.water ? (<li>water : {item.water}</li>) : '' }
            { item.candy ? (<li>candy : {item.candy}</li>) : '' }
        </div>
    )
}