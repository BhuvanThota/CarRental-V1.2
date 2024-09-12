import React from 'react'
import {Link} from 'react-router-dom'
import Services from './components/Services-Home.jsx'
import Cards from './components/Cards-Home.jsx'

import '/pages/styles/home.css'

function Home() {
  return (
    <main>
      <section  >
        <div className='hero-img' ></div>
        <div className="hero-text text-center text-wrap mx-auto max-w-sm md:max-w-lg lg:max-w-3xl ">
          <h1 className=' md:text-5xl my-3 text-4xl font-bold font-serif lg:pt-16 pt-8 '>You got the travel plans, we got the rental cars.</h1>
          <p className='py-10 font-semibold my-6 md:text-xl text-md'>Add adventure to your life by joining the our rental movement. Rent the perfect car to make your perfect road trip.</p>
          <Link className='rounded-lg py-3  md:px-16 px-4 bg-[#fd9423] font-semibold hover:bg-[#ff9b29ba] hover:font-bold' to="cars"> Find your Car → </Link>
        </div>
      </section>
      <Services />
      
      <Cards />

    </main>
  )
}

export default Home
