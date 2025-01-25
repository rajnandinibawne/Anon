import React from 'react'

import HeroSection from '../herosection/Herosection'

import Shortslide from '../slider/Shortslide'
import Products from '../products/Products'
import Testimonial from '../Testimonial/Testimonial'
import Blogs from '../blogs/Blogs'


const Home = () => {
  return (
    <div>
 
      <HeroSection/>
      <Shortslide />
      <Products />
      <Testimonial/>
      <Blogs/>
      {/* <Notification/> */}
      {/* <Subscribe/> */}
    </div>
    
  )
}

export default Home
