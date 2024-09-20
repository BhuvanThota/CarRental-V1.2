import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostCarPricing(){
    const car = useOutletContext();
    return(
        <>
        <h3><strong>Cost per Day: </strong>₹{car.price}</h3>
        </>
    )
}

export default HostCarPricing