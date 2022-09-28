import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    for (const product of cart) {
        console.log(product);
        const { price, shipping } = product;
        shippingCharge = shippingCharge + shipping
        total = total + price;
    }
    const tax = parseFloat((total * 4 / 100).toFixed(2))
    const grandTotal = total + shippingCharge + tax
    return (
        <div className='cart'>
            <h3> order summary </h3>
            <p>selected items : {cart.length}</p>
            <p>total price : ${total}</p>
            <p>total shipping charge : $ {shippingCharge}</p>
            <p>tex : $ {tax}</p>
            <p>grand total : $ {grandTotal.toFixed(2)}</p>
            <div className='btn-cart-order'>
                <button className='dle-btn'>Clear cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                <button className='review-order-btn'>Clear cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;