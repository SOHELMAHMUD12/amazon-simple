import React from 'react';
import './Product.css'; 

const Product = (props) => {
 const {name, img, seller, price, ratings, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings} stars</p>
            <p>Stock:{stock}</p>
            
        </div>
    );
};

export default Product;