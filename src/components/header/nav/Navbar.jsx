import React, { useState } from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Categories from '../../categories/Categories';
// import Mens from '../../mens/Mens';
// import Women from '../../women/Women';
// import Jewellery from '../../jewellery/Jewellery';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (menu) => {
    setHoveredItem(menu);

  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <nav>
      <ul className={style.navlist}>
        <li>
          <NavLink to="/" className={style.navbarlink}>Home</NavLink>
        </li>
        <li>
        <NavLink to='/categories'   className={({ isActive }) =>
            isActive ? `${style.navbarlink} ${style.active}` : style.navbarlink
          }>Categories</NavLink>
        </li>
        <li >
          <NavLink to="/mens" 
           className={({ isActive }) =>
            isActive ? `${style.navbarlink} ${style.active}` : style.navbarlink
          }
          onMouseEnter={() => handleMouseEnter('mens')}
          onMouseLeave={handleMouseLeave}
        >
            Mens 
          </NavLink>
           {hoveredItem ==='mens' && (
            <div className={style.dropdown}>
              <ul>
                <li>
                  <a href="/mens/jackets">Jackets</a>
                </li>
                <li>
                  <a href="/mens/shoes">Shoes</a>
                </li>
                <li>
                  <a href="/mens/shirts">Shirts</a>
                </li>
                <li>
                  <a href="/mens/watches">Watches</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
        <NavLink to='/women' 
         onMouseEnter={()=>handleMouseEnter('women')}
         onMouseLeave={handleMouseLeave}
         className={({ isActive }) =>
          isActive ? `${style.navbarlink} ${style.active}` : style.navbarlink
        }>Women</NavLink>
        {hoveredItem  === 'women' && (
            <div className={style.dropdown}>
              <ul>
                <li>
                  <a href="/women/Saree">Saree</a>
                </li>
                <li>
                  <a href="/women/Jewellery">Shoes</a>
                </li>
                <li>
                  <a href="/women/Dress">Shirts</a>
                </li>
                <li>
                  <a href="/women/Western">Watches</a>
                </li>
                <li>
                  <a href="/women/Shampoo">Shampoo and conditioner</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li >
        <NavLink to='/jewellery' 
         onMouseEnter={()=>handleMouseEnter('jewellery')}
         onMouseLeave={handleMouseLeave}
        className={({ isActive }) =>
            isActive ? `${style.navbarlink} ${style.active}` : style.navbarlink
          }>Jewellery</NavLink>
          {hoveredItem  === 'jewellery' && (
            <div className={style.dropdown}>
              <ul>
                <li>
                  <a href="#">Necklace</a>
                </li>
                <li>
                  <a href="#">Earrings</a>
                </li>
                <li>
                  <a href="#">Bangles</a>
                </li>
                <li>
                  <a href="#">Diamond rings</a>
                </li>
                <li>
                  <a href="#">Gold chain</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
         <NavLink to='/perfumes'   className={({isActive}) => isActive ?  `${style.navbarlink} ${style.active}` : style.navbarlink}>
         Perfumes</NavLink>
        </li>
        
        <li>
        <NavLink  to='/blogs'  className={style.navbarlink}>Blogs</NavLink>
        </li>
        <li>
        <NavLink  to='/newoffer'  className={style.navbarlink}>New Offers</NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
