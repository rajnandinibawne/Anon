import React, { useState } from 'react';
import { useCart } from '../../CartContext';
import { MdOutlineDownloadDone } from "react-icons/md";
import { ImCross } from "react-icons/im";
import style from './Final.module.css';
import { IoGitCommit } from "react-icons/io5";

const Final = () => {
  const { cart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [showOrderTracking, setShowOrderTracking] = useState(false);

  // Address state
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Order Tracking Information
  const orderTrackingInfo = {
    status: "Shipped",
    progress: [
      { timestamp: '2025-01-29 4:00 PM', location: 'Warehouse', status: 'Ordered' },
      { timestamp: '2025-02-02 3:00 PM', location: 'In Transit', status: 'Shipped' },
      { timestamp: '2025-02-05 10:00 AM', location: 'Out for Delivery', status: 'Out for Delivery' },
      { timestamp: '2025-02-07 2:00 PM', location: 'Delivered', status: 'Delivered' }
    ]
  };

  const handleOrderClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  return (
    <div className="">
      <div className={style.final_cart}>
        <div className={style.left_final}>
          <h3>Your Items</h3>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className={style.final_card}>
                <h4>{item.title}</h4>
                <p>({item.quantity} items)</p>
                <p>{item.realprice}</p>
              </div>
            ))
          ) : (
            <p>No items in cart.</p>
          )}
        </div>
        <div className={style.right_final}>
          <p>Total items: {cart.length}</p>
          <h5>Total Amount: ${cart.reduce((total, item) => total + parseFloat(item.realprice.replace(/[^0-9.-]+/g, '')), 0).toFixed(2)}</h5>
          
          {/* Address Section */}
          <div className={style.address_form}>
            <h4>Delivery Address</h4>
            <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleAddressChange} required />
            <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} required />
            <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} required />
            <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} required />
            <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleAddressChange} required />
            <input type="text" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} required />
          </div>

          {/* Payment Method */}
          <form>
            <select className={style.payment} value="payment method">
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Scanner"> Scan QR Code</option>
            </select>
          </form>

          <button className={style.order_btn} onClick={handleOrderClick}>Order</button>
        </div>
      </div>

      {/* Success Popup */}
      <div className={style.popup}>
        {showPopup && (
          <div className={style.popup_overlay}>
            <div className={style.popup_content}>
              <button onClick={() => setShowPopup(false)} className={style.popup_close_btn}><ImCross /></button>
              <div><MdOutlineDownloadDone className={style.order_icon} /></div>
              <h2>Order Placed Successfully!</h2>
              <p>Thank you for your purchase. We will process your order shortly.</p>
              <p><strong>Delivery To:</strong> {address.name}, {address.street}, {address.city}, {address.state} - {address.zip} <br /> Phone: {address.phone}</p>
              <button className={style.track_btn} onClick={() => setShowOrderTracking(true)}>Track Your Order here</button>
            </div>
          </div>
        )}
      </div>

      {/* Order Tracking Info */}
      {showOrderTracking && (
        <div className={style.order_track}>
          <div className={style.one_track_info}>
            <h4>Order No: <b>#65234</b></h4>
            <h5>Expected Delivery: <b>07/02/2025 , Saturday</b></h5>
          </div>
          <div className={style.delivery_track}>
            <h3>Tracking Progress</h3>
            <div className={style.track_progress}>
              {orderTrackingInfo.progress.map((progress, index) => (
                <div key={index} className={style.track_step}>
                  <div className={style.progress}><IoGitCommit className={style.track_icon} /></div>
                  <p>{progress.timestamp}</p>
                  <p>Status: <b>{progress.status}</b></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Final;
