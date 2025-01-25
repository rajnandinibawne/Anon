import React from 'react'
import style from './Mens.module.css'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
import Herosection from './hersection/Herosection'
import Serviceslide from './slide/Serviceslide'
import Extramen from './extra/Extramen'
import Menblog from './menblog/Menblog'
import AdMen from './adsection/AdMen'
// import Blogs from '../blogs/Blogs'

const Mens = () => {
  return (
    <div id='#men'>
      <div className={style.men_navbar}>
      
        <nav>
          <hr/>
          {/* <h3>Men's Section</h3> */}
          <ul className={style.men_nav_list}>
            <li className={style.men_nav_name}><a href='#' className={style.men_nav_name}>Shirts</a></li>
            <li className={style.men_nav_name}><a href='#'>Jackets</a></li>
            <li className={style.men_nav_name}><a href='#'>Casual Wear</a></li>
            <li className={style.men_nav_name}><a href='#'>Wallets and Accesories</a></li>
            <li className={style.men_nav_name}><a href='#'>Shoes</a></li>
          </ul>
        </nav>
      </div>
      <Herosection/>
      <Serviceslide/>
      <AdMen/>
      <Extramen/>
      <Menblog/>
      {/* <Blogs/> */}
     
    </div>
  
  )
}

export default Mens
