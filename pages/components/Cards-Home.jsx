import React from 'react'
import {Link} from 'react-router-dom'
import cardimg1 from "../assets/pexels-pixabay-164634.jpg"
import cardimg2 from "../assets/pexels-shkrabaanthony-7144212.jpg"
function Cards() {
    return (

        <section className='container text-wrap '>

            <div className='img-desc-card mb-16 rounded-xl pb-3 md:pb-0 max-w-base mx-auto md:max-w-5xl xl:max-w-7xl md:flex md:gap-8 '>
                <div >
                    <img src={cardimg1} alt="Cars-images" />
                </div>
                <div className='desc-text'>
                    <h4 className='text-xl font-bold md:text-2xl'>Check out all of the Car models!</h4>
                    <p className='text-sm my-4 mb-8 md:text-base'>Explore our range of Rental Car models and locate your ideal travel ride that fulfills all your desires and turns your travel dreams into reality. We provide a varied assortment of cars from well-known manufacturers such as Maruti, Kia, Toyoto, VW, and many others.</p>
                    <Link className='rounded-lg py-3  md:px-16 px-16 bg-[#fd9423] font-semibold hover:bg-[#ff9b29ba] hover:font-bold' to="cars">Find your car</Link>
                </div>
            </div>

            <div className='img-desc-card mb-16 rounded-xl pb-3 md:pb-0 max-w-base mx-auto md:max-w-5xl xl:max-w-7xl md:flex-row-reverse md:flex md:gap-8 '>
                <div >
                    <img src={cardimg2} alt="Cars-images" />
                </div>
                <div className='desc-text'>
                    <h4 className='text-xl font-bold md:text-2xl'>Do you own a car? Generate more than ₹50,000 annually (starting from..) </h4>
                    <p className='text-sm my-4 mb-8 md:text-base'>Have you thought about generating income during the times when your campervan is not in use? Register your vehicle for free and make it available for rent whenever you choose.</p>
                    <Link className='rounded-lg py-3  md:px-16 px-16 bg-[#fd9423] font-semibold hover:bg-[#ff9b29ba] hover:font-bold' to="cars">Rent out my Car</Link>
                </div>
            </div>
        </section>
    )
}

export default Cards