import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Singleproduct.module.css"; // Add your CSS file
// import Newproducts from "../newproducts/NewProducts"; // Move product data to a separate file for reuse
import { allProducts } from "../../Record";
import { jewellery , Perfume } from "../Data";
import { useCart } from "../CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  // const product = allProducts.find((item) => item.id === parseInt(id));
  const mergedProducts = [...allProducts, ...jewellery, ...Perfume];

  // Find product by ID
  const product = mergedProducts.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();
  if (!product) {
    return <div>Product not found!</div>;
  }
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };


  return (
    <div className={style.single_product}>
      
      <div className={style.product_details}>
        <img src={product.image} alt={product.product} className={style.product_image} />
        {/* <img src={product.image2} alt={product.product} className={style.product_image} /> */}
        
        <div className={style.prod_info}>
        {/* <h1>{product.product}</h1> */}
        <h1>{product.title}</h1>
          <h2>{product.subtitle}</h2>
          
          <div className={style.new_price}>
            <h4 className={style.new_realprice}><b>{product.realprice}</b></h4>

            <del>{product.fakeprice}</del>     
          </div>
          <p className={style.description}>{product.description}</p>
          <p>{product.stars}</p>
          <hr/>
          <div className={style.quantity_control}>
            <button
              className={style.decrement_button}
              onClick={handleDecrement}
            >
              -
            </button>
            
            <span className={style.quantity}>{quantity}</span>
            <button
              className={style.increment_button}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className={style.addtocart} onClick={handleAddToCart}><Link to='/cart' >Add to Cart</Link></button>
          
        </div>
        {/* <hr/> */}



        
      </div>
    </div>
  );
};

export default SingleProduct;
