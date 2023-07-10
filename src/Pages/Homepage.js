import React from 'react'
import Hero from '../Components/Hero';
import Specials from '../Components/Specials';
import Testimonials from '../Components/Testimonials';
import About from '../Components/About';


const Homepage = () => {

    return (
        <div>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About />
        </div>
    )
}

export default Homepage