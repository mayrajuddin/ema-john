import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        // console.log(product);
        const addProduct = [...cart, product]
        setCart(addProduct)
    }
    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-sec">
                <p> this is cart </p>
                <p>total products {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;