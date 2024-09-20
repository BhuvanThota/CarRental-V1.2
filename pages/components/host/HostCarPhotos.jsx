import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostCarPhotos(){
    const car = useOutletContext();

    return(
        <>
            <div className='w-[150px] md:w-[250px]'>
                <img src={car.imageUrl} alt={car.name} />
            </div>
        </>
    )
}

export default HostCarPhotos