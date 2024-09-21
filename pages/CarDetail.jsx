import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

function CarDetail() {
    const location = useLocation();
    const params = useParams();

    const [car, setCar] = React.useState({});

    const type = location.state?.type || "all"

    React.useEffect( () => {
        const fetchdata = async () => {
            try{
                const res = await fetch(`/api/cars/${params.id}`);
                const data = await res.json();
                setCar(data.cars);
            } catch (err){
                console.error("Error fetching data", err);
            }
        };
        fetchdata();
    }, [params.id]);

    
    return (
        <>
            <Link to= {`..?${location.state.sp}`} relative='path'>
            <p className=' cardetail-back px-5 text-lg font-semibold hover:underline hover:text-sky-600 ' >&larr; Back to {type} cars  </p>
            </Link>
            <div className='cardetail-container'>
                <h1 className=' text-3xl font-extrabold capitalize md:text-4xl underline'> Car: {car.name} </h1>
                <img className='inline-block rounded-xl my-8 max-w-[90%]' src={car.imageUrl} alt={car.name} />
                <p>
                    <em className={`px-4 rounded-xl  py-2 ${car.type} text-slate-200 font-semibold capitalize`}>{car.type}</em>
                </p>
                <h3 className='mt-[1rem] text-xl font-semibold md:text-2xl'>Cost per day: {car.price}</h3>
                <p className='mt-[1rem] md:text-lg text-wrap max-w-[80%] md:max-w-[70%]'><strong>Description: </strong> {car.description} </p>
            </div>


            <Link to={`..?${location.state.sp}`} relative='path'>
            <p className=' cardetail-back px-5 text-lg font-semibold hover:underline hover:text-sky-600 ' >&larr; Back to {type} cars  </p>
            </Link>

        </>
    )
}

export default CarDetail