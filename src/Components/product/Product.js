import React from 'react';
import { BsCart4 } from "react-icons/bs";


import './Product.css'; 

const Product = (props) => {
    // const {product,handleAddToCart} = props;
 const {name, img, seller, price, ratings} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings} stars</p>
            
          </div>
          <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p>AddToCart</p>
            <BsCart4 className='btn-icon'/>
         


          </button>
            
        </div>
    );
};

export default Product;