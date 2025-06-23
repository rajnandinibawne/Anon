import React from 'react'
import style from './Cart.module.css'
import { MdDelete } from "react-icons/md";
import { FaShippingFast,FaStar  } from "react-icons/fa";
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, total,removeItem,updateQuantity } = useCart();
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      
      const price = item.realprice
        ? parseFloat(item.realprice.replace(/[^0-9.-]+/g, '')) // Remove any non-numeric characters and parse as float
        : 0; 

      
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
  };
  const handleIncrement = (id) => {
    updateQuantity(id, 1); 
  };

  const handleDecrement = (id) => {
    updateQuantity(id, -1); 
  };



  return (
    <div className={style.main_cart}>
      <h1 className={style.cart_heading}> Cart</h1>
      {/*  <hr /> */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <ul>
          <div className={style.cart_items}>
            {cart.map((item) => (
             
              <div key={item.id} className={style.cart_card} >
                
                {/* <h3>{item.image}</h3> */}
                <div ><Link to={`/product/${item.id}`} ><img src={item.image} alt='product_image' className={style.cart_image} /></Link></div>
                <h3>{item.title}</h3>
                 <h4 className={style.cart_price}> {item.realprice}</h4>
                 <div className={style.quantity_controls}>
                    <button onClick={() => handleDecrement(item.id)} className={style.decrement_btn}>-</button>
                    <span className={style.quantity}>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)} className={style.increment_btn}>+</button>
                  </div>
                 <div className={style.cart_remove}>
            <div><MdDelete  className={style.remove_icon} onClick={()=> removeItem(item.id)}  /></div>
         </div>   
              </div>
              // {/* <hr /> */}
              
            ))}
          </div>
          </ul>
          <hr className={style.line}/>
          
        </>
      )}
      <div className={style.cart_last}>
        <div ><Link to='/'>
        <button className={style.continue_btn} >Continue Shopping</button>
        </Link></div>
      <div className={style.total_price}>
         <p><b>Total:</b> ${calculateTotal().toFixed(2)}</p>
         <p>  <FaShippingFast className={style.icons}/> Free delivery</p>
         <Link to={{
              pathname: '/final',
              state: { cart },  
  }}
>
         <button className={style.buy_btn} >Buy Now</button>
         </Link>
         </div>
         
      

      </div>
    </div>
  );
};

export default Cart;



