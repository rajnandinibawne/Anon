import React, { useState, useEffect } from "react";
import style from './DeadlineTimer.module.css'
const DeadlineTimer = () => {
  const deadline = new Date().getTime() + 48 * 24 * 60 * 60 * 1000; // 48 days from now
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, [deadline]);

  function calculateTimeLeft(deadline) {
    const difference = deadline - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  return (
    <div>
      <h3>Time Remaining</h3>
      <div className={style.wholetimer}>
        <div className={style.timer_part}>{timeLeft.days} <p>days</p></div> 
        
        <div className={style.timer_part}>{timeLeft.hours} <p>hours</p> </div>
        <div className={style.timer_part}>{timeLeft.minutes} <p>minutes</p></div> 
        <div className={style.timer_part}>{timeLeft.seconds} <p>seconds</p></div>
      </div>
    </div>
  );
};

export default DeadlineTimer;
