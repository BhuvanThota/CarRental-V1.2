import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Cars() {
  const [cars, setCars] = React.useState([]);
  const [filteredCars, setFilteredCars] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typefilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/cars")
        .then(res => res.json())
        .then(data => setCars(data.cars));
        
  }, []);

  React.useEffect(() => {
    if(typefilter){
      setFilteredCars(cars.filter((car) => car.type.includes(typefilter) ));
    }else{
      setFilteredCars(cars);
    }
  }, [searchParams,cars]);
  

  const carelements = filteredCars.map((car) => (
    <Link key={car.id} to={car.id} state={{ sp: searchParams.toString(), type: typefilter}}> 
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
    <div>
      <hr />
      <div className='w-[90%] mx-auto mt-[1rem] flex gap-[1rem] items-center flex-wrap'>
        <h4 className='text-xl'>Filter:</h4>
        <button className='py-[4px] px-[10px] rounded-xl text-cyan-50 bg-[#13276b] hover:bg-[#2143b4ac]' 
              onClick={() => setSearchParams({type: "sedan"})}
        > Sedan</button>
        <button className='py-[4px] px-[10px] rounded-xl text-cyan-50 bg-[#ff8f06] hover:bg-[#ff8f06a4]'  
              onClick={() => setSearchParams({type: "suv"})}
        > SUV</button>
        <button  className='py-[4px] px-[10px] rounded-xl text-cyan-50 bg-[#01aea9] hover:bg-[#0188ae9d]'  
              onClick={() => setSearchParams({type: "luxury"})}
        > Luxury</button>
        <button className='py-[4px] px-[10px] rounded-xl text-cyan-50 bg-[#006400] hover:bg-[#2e922dc1]'  
              onClick={() => setSearchParams({type: "electric"})}
        > Electric</button>
        {typefilter && 
        <button  className='py-[4px] px-[10px] rounded-xl hover:bg-[#c5c5c589] hover:underline'  
            onClick={() => setSearchParams({})}
        > Reset</button>}
      </div>
    </div>
    <hr />
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