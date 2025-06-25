import React from 'react'
import style from './Header.module.css'
import { FaFacebook,FaTwitter, FaRegHeart  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoPersonOutline,IoBagHandle } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";
import Navbar from './nav/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.begin}>
    <div className={style.first}>
      <div className={style.first_icons}>
        <a href="" > <FaFacebook className={style.social_icon}/></a>
        <a href=''><FaTwitter className={style.social_icon}/></a>
        <a href=''><FaInstagram className={style.social_icon}/></a>
        <a href=''><FaLinkedin className={style.social_icon} /></a>
      </div>
      <div className={style.first_second}>
        <p><b>Free Shipping</b> This Week Order Over - $55</p>
      </div>
      <div className={style.first_third}>
        <form action="#">
            <select name='currency' className={style.select}>
                <option value="USD$ " className={style.usd}>USD$</option>
                <option value="eur">EUR</option>

            </select>
        </form>
        <form action="#">
            <select name='language' className={style.select}>
                <option value=" eng" >English</option>
                <option value="esp">Espanol</option>
                <option value="hindi">Hindi</option>

            </select>
        </form>
      </div>
      
    </div> 
    <hr />
    <div className={style.second}>
        <div to='/'  className={style.logo}>
            <img src='./logo.svg' alt='Anon-logo'/>
        </div>
        <div className={style.search}>
            <input type='search' name='search' placeholder='Enter your product here...' className={style.search_box}/>
        </div>
        <div className={style.second_last}>
            <IoPersonOutline className={style.second_icon}/>
            <FaRegHeart  className={style.second_icon}/>
            <a href='/cart'  className={style.second_icons} >
            <IoBagHandle  className={style.second_icon} /></a>

        </div>
    </div>
    <hr />
    <Navbar/>
    <NavLink to='/'></NavLink>
    </div>
  )
}

export default Header
