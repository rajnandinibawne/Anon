import React from 'react'
import style from './Perfumes.module.css'
const Perfumes = () => {
  return (
    <div id='#perfumes'> 
    <h1>Perfume Section</h1>
       <div className={style.women_cat}>
              <ul>
                <li>Deodorant</li>
                <li>Natural</li>
                <li> Flower</li>
                <li> Clothes</li>
                <li>Room Freshner</li>
                <li>Air freshner</li>
              </ul>
              </div>
    </div>
  )
}

export default Perfumes
