import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, img, seller, ratings } = props.product;
    const { addToCart } = props
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p>{name}</p>
                <p style={{ fontWidth: 'bold' }}>${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings : {ratings} Starts</small></p>
            </div>
            <button className='cart-btn' onClick={() => addToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;