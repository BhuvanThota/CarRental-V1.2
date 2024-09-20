import React from 'react'
import { CarContext } from './HostCarLayout'

function HostCarPhotos(){
    const car = React.useContext(CarContext);
    
    return(
        <>
            <div className='w-[150px] md:w-[250px]'>
                <img src={car.imageUrl} alt={car.name} />
            </div>
        </>
    )
}

export default HostCarPhotos