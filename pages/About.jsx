import React from 'react'
import { Link } from 'react-router-dom'
import data from './assets/about.json'

import '/pages/styles/about.css'

function About() {


    return (
        <main>
            <section  >
                <div className='head-img' ></div>
                <div className="head-text text-center md:text-left text-wrap  my-0 mx-auto max-w-lg lg:max-w-3xl pt-16">
                    <h1 className=' md:text-5xl my-3 text-4xl font-bold font-serif md:pt-16 pt-8 '>About Us</h1>
                </div>
            </section>

            <section className='container text-wrap'>
                <h3 className='font-bold text-2xl md:text-4xl mb-6'>Don't settle for a sedan when you can cruise in comfort.</h3>

                <p className=' text-base md:text-lg'> <strong>Welcome to Car Rental.</strong> Whether you're embarking on a weekend getaway, a family vacation, or a business trip, we've got the perfect rental car to suit your needs.     <br /> <br /> At Car Rental Central, we believe in providing exceptional service and top-quality vehicles. Our fleet includes a wide range of options, from compact cars for city driving to spacious SUVs for family adventures. We're committed to making your rental experience as smooth and enjoyable as possible.</p>
                <br />
                <h4 className='font-bold text-lg md:text-xl '>Explore new destinations, experience the freedom of the open road, and make unforgettable memories.</h4>
            </section>

            <section className='container text-wrap'>
                <ul className='flex flex-col gap-8'>
                {data.data.map((item, index) => (
                    <li className='' key={index}>
                        <h4 className='font-bold text-lg md:text-xl '>{item.title}</h4>
                        <p className=' text-base md:text-lg'>{item.context}</p>
                    </li>
                ) )}
                </ul>
            </section>

            <section className='container text-wrap text-center'>
                <div className='about-bottom bg-[#f6a044] p-4'>
                    <h3 className='text-3xl font-bold'>Your destination is waiting. <br /> Your car is ready.</h3>
                    <Link  to="/cars">
                        <button className='rounded-lg text-zinc-200 py-2 px-8 my-4 bg-[#000000] font-semibold hover:bg-[#000000ba] hover:font-bold'>
                        Explore our cars →
                        </button>
                    </Link>
                    
                </div>
            </section>

        </main>
    )
}

export default About