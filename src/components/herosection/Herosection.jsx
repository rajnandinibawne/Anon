import React from 'react'
import style from './Herosection.module.css'
import  { useState, useEffect } from "react";
// import "./HeroSection.css"; // Import your styles
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";

const slides = [
  {
    id: 1,
    topic: "Trending items",
    title: "Women's Latest fashion Sale",
    subtitle: "Starting at $20.00",
    // image: "../../images/banner-1.jpg", 
    image:banner1,
  },
  {
    id: 2,
    topic: "Trending Accesories",
    title: "Modern Sunglasses",
    subtitle: "Don't miss out on our special offers.",
    // image: "../../images/banner-2.jpg", // Replace with the actual image path
    image: banner2,
  },
  {
    id: 3,
    topic: "Sale Offer",
    title: "Style Redefined",
    subtitle: "Upgrade your wardrobe with our collection.",
    // image: "../../images/banner-3", // Replace with the actual image path
    image:banner3,
  },
];
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set interval to auto-slide every 5 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(nextSlide); // Change slide every 5 seconds
  //   return () => clearInterval(intervalId); // Clean up on component unmount
  // }, []);

  return(
    <div> 
      <div className={style.herosection}>

        {slides.map((item) => (
          <div
          className={style.hero_card}
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
        >
            <div className="hero_info">
              <div className={style.hero_topic}>{item.topic}</div>
              <div className={style.hero_title}> {item.title}</div>
              <div className={style.hero_subtitle}> {item.subtitle}</div>
              </div>
              <button className={style.hero_btn}>Shop now</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default HeroSection;
