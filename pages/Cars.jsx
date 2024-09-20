import React from 'react';
import { Link } from 'react-router-dom';

function Cars() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/cars")
        .then(res => res.json())
        .then(data => setCars(data.cars));
  }, []);

  

  const carelements = cars.map((car) => (
    <Link key={car.id} to={`${car.id}`}> 
      <div  className=" car-item  rounded-xl p-2">
          <img className=" w-[90%]  inline-block rounded-xl" src={car.imageUrl} alt={car.name} />
        <div className='my-4 flex flex-col gap-2'> 
          <h3 className="px-4 text-xl font-bold md:text-2xl lg:text-3xl">{car.name}</h3>
          <p className="px-4 md:text-lg lg:text-xl">₹{car.price}/day</p> 
        </div>
          <i className={`mx-4 px-4 rounded-xl  py-2 ${car.type} text-slate-200 font-semibold capitalize`}>{car.type}</i>
      </div>
    </Link>
  ));

  return (
    <>
    <h1 className='cars-container  text-4xl font-extrabold'>Explore our car options</h1>
    {cars.length > 0 && ( 
      <section className="cars-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-x-4">
        {carelements}
      </section>
    )}
    {cars.length === 0 && <p className="cars-container p-[3rem] text-center text-2xl font-bold">Loading cars...</p>}
  </>
  );
}

export default Cars;