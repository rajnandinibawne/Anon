import React from 'react'
import style from './Women.module.css'
import Womenblog from './blog/WomenBlog'
// import Womenblog from './blog/Womenblog'
const Women = () => {
  return (
    <div id='#women'>
      <div className={style.women_navbar}>
      
        <nav>
          <hr/>
         
          <ul className={style.men_nav_list}>
            <li className={style.men_nav_name}><a href='#' className={style.men_nav_name}>Traditioanl Wear</a></li>
            <li className={style.men_nav_name}><a href='#'>Sarees</a></li>
            <li className={style.men_nav_name}><a href='#'>Western Style</a></li>
            <li className={style.men_nav_name}><a href='#'>Jewellery</a></li>
            <li className={style.men_nav_name}><a href='#'>Footwear</a></li>
            <li className={style.men_nav_name}><a href='#'>Makeup Accesories</a></li>
          </ul>
        </nav>
      </div>
     {/* <Womenblog/> */}
     <Womenblog/>
    
     
    </div>
  )
}

export default Women
