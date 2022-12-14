import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
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
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;