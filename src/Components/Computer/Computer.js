import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Computer.css'

const Computer = ({ handleAddToCart, computer }) => {
    const { name, img, price } = computer;

    return (
        <div className='computer-card'>
            <img src={img} alt="Computer" />
            <div className='computer-info'>
                <h3>{name}</h3>
                <h4>Price:${price}</h4>


            </div>
            <button onClick={() => handleAddToCart(computer)} className='computer-btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Computer;