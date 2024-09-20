import React from 'react'
import {Outlet, NavLink, Link, useParams} from 'react-router-dom'

function HostCarLayout(){
    
    const params = useParams();

    const [car, setCar] = React.useState({});

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
    
    const base = {}
    
    const activecolor = {
        color: "#049fff",
        textDecoration: "underline"
    }

    return(
        <>
            <section className=' flex flex-col md:flex-row md:items-center'>
                <img className='inline-block rounded-xl my-8 w-[80%] md:w-[450px] ' src={car.imageUrl} alt={car.name} />
                <div>
                    <i className={`mx-4 px-4 rounded-xl  py-2 ${car.type} text-slate-200 font-semibold capitalize `}>{car.type}</i>
                    <h3 className="mt-4 px-4 font-bold text-2xl lg:text-3xl">{car.name}</h3>
                    <p className="mt-2 px-4 md:text-lg lg:text-xl">₹{car.price}/day</p>
                </div>
            </section>
            <nav className='hostcar-navbar '>
                <ul>
                    <li>
                        <NavLink 
                            to="" 
                            end
                            style={({isActive}) => isActive ? activecolor : base}
                        >
                            Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activecolor : base}
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activecolor : base}
                        >
                            Photos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <section>
                <Outlet />
            </section>

            <Link to="../cars" >
            <p className='hostcars-back text-lg font-semibold hover:underline hover:text-[#da5700] ' >&larr; Back to your cars  </p>
            </Link>
        </>
    )
}

export default HostCarLayout