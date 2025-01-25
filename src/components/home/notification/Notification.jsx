import React, { useState, useEffect } from 'react';
import style from './Notification.module.css';
import { ImCross } from "react-icons/im";
import image from '/images/products/jewellery-1.jpg';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true); // Show the notification
      setTimeout(() => {
        setIsVisible(false); // Hide the notification after 2 seconds
      }, 5000);
    
    };

    // Show notification every 5 seconds
    const interval = setInterval(showNotification, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide the notification
  };

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className={style.notification_block}>
      <div className={style.block_img}>
        <img src={image} className={style.block_img} alt="image" />
      </div>
      <div className={style.block_info}>
        <p>Someone new has bought this</p>
        <h3>Earrings</h3>
        <p>2 minutes ago</p>
      </div>
      <button onClick={handleClose} className={style.block_btn}>
        <ImCross />
      </button>
    </div>
  );
};

export default Notification;
