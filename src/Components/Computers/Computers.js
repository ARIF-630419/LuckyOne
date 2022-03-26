import React, { useEffect, useState } from 'react';
import './Computers.css'
import Computer from '../Computer/Computer'
import Cart from '../Cart/Cart'

const Computers = () => {
    const [computers, setComputers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('computers.json')
            .then(res => res.json())
            .then(data => setComputers(data))
    }, [])

    const removeItem = () => {
        setCart([]);

    }
    const handleAddToCart = (computer) => {

        const newCart = [...cart, computer];
        setCart(newCart);
    }
    return (
        <div>
            <h2 className='computer-header'>Computer Store</h2>
            <div className='computers-container'>
                <div className='computers-information'>
                    {
                        computers.map(computer => <Computer
                            key={computer.id}
                            computer={computer}
                            handleAddToCart={handleAddToCart}
                        ></Computer>)
                    }
                </div>
                <div className='computers-cart'>
                    <Cart
                        cart={cart}
                        removeItem={removeItem}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};


export default Computers;