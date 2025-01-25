import React from 'react'
import style from './Categories.module.css'
const Category = [
  {
    id:1 ,
    title : "Electronics",
    items : <ul>
      <li> Desktop </li>
      <li> TV </li>
      <li> Speaker </li>
      <li> Camera </li>
      <li>  Headphone</li>
      <li> Bluetooth </li>
    </ul>,
    image: "/images/electronics-banner-1.jpg",
  },
  {
    id:2,
    title : "Women",
    items : <ul>
      <li> Party Wear </li>
      <li> Traditional </li>
      <li> Sarees </li>
      <li> Kurtids & Plazzo </li>
      <li>Makeup Accesories</li>
      <li> Sandals </li>
    </ul>,
    image: '/images/womens-banner.jpg',
  },
  {
    id:3 ,
    title : "Men",
    items : <ul>
      <li> Jackets </li>
      <li> Shoes </li>
      <li> Shirts </li>
      <li> Watches </li>
      <li> Sunglasses </li>
      <li> Wallets </li>
    </ul>,
    image: '/images/mens-banner.jpg',
  },
  {
    id: 4,
    title : "Home Furniture",
    items : <ul>
      <li> Tables </li>
      <li> Wardrobe </li>
      <li> Bed </li>
      <li> Dinning Set </li>
      <li> Showcase </li>
      <li> Kitchen </li>
    </ul>,
    image:"/images/electronics-banner-2.jpg",
  },
]

const Categories = () => {
  return (
    <div className={style.whole_category} id='#categories'>
     
      {Category.map((item)=>(
        <div className={style.category_part}>
          <h3>{item.title}</h3>
          <p><hr /></p>
          <p>{item.items}</p>
          <div className={style.cat_pic}> <img src={item.image} alt={item.title} className={style.cat_pic} /></div>
        </div>
    
      ))}
    </div>
  )
}

export default Categories
