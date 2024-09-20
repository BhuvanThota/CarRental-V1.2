import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostCarDetails(){
    const car = useOutletContext();
    return(
        <>
            <div className='flex flex-col gap-[1rem]'>
                <p><strong>Name:</strong> {car.name}</p>
                <p><strong>Category:</strong> {car.type}</p>
                <p><strong>Description:</strong> {car.description}</p>
                <p><strong>Visibility:</strong> {Math.random() < 0.75 ? "Public" : "Private"}</p>
            </div>
        </>
    )
}

export default HostCarDetails