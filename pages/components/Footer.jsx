import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer >
            <hr />
            <section className='container flex flex-col gap-8 md:flex-row justify-between md:gap-32'>
                <div className='footer-links text-left flex flex-col gap-4 '>
                    <Link to="/">
                        <button className='text-3xl font-bold flex gap-2 justify-center items-center  '>
                            <img src="./pages/assets/3d-car.png" alt="car-logo" width="50px" className='inline-block' />
                            CarRental
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className='text-xl' >About </button>
                    </Link>
                    <Link to="/cars">
                        <button className='text-xl' >Our cars</button>
                    </Link>
                </div>

                <div className=' text-wrap'>
                    <h4 className='text-2xl font-semibold mb-4 '>Car Rental</h4>
                    <p>We offer high-quality cars for rental or purchase in various destinations throughout India, delivered through a user-friendly and tailor-made online platform.</p>

                </div>
            </section>


            <div className='text-gray-400 bg-black text-center py-4'>
                <h5>Copyright ©️ CAR-RENTAL 2024 All rights reserved | Website developed by Teacher B </h5>
            </div>


        </footer>
    )
}

export default Footer