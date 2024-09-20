import React from 'react'
import { CarContext } from './HostCarLayout'

function HostCarPricing(){
    const car = React.useContext(CarContext);
    return(
        <>
        <h3><strong>Cost per Day: </strong>₹{car.price}</h3>
        </>
    )
}

export default HostCarPricing