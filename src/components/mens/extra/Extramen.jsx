import React, { useState } from 'react'
import style from './Extramen.module.css'
import Pagignation from './pagignation/Pagignation'
import {ExtraMen} from'../../../Record'
import { Link } from 'react-router-dom'
const Extramen = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const[postsPerPage, setPostsPerPage] = useState(10)


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = ExtraMen.slice(firstPostIndex, lastPostIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={style.extra_men}>
      <h1>Featured Products</h1>
      <Pagignation
        totalPosts={ExtraMen.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        setCurrentPage={setCurrentPage}
      />
      <div className={style.whole_card}>

     
       

      {currentPosts.map((item)=>(
       
        <div className={style.extra_men_card}  key={item.id} >
            <Link to={`/product/${item.id}`} className={style.Single_link}>
          
            <div className={style.image}><img src={item.image} alt='PIC' className={style.image} /></div>
            <div className={style.card_info}>
            <div className={style.card_title}>{item.title}</div>
            <div className={style.card_subtitle}>{item.subtitle}</div>
            <div className={style.card_star}>{item.stars}</div>
            <div className={style.card_price}>
              <div className={style.real_price}>{item.realprice}</div>
              <del className={style.fake_price}>{item.fakeprice}</del>
            </div>
            </div>
            </Link>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Extramen
