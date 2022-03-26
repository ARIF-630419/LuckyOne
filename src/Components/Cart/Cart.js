import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            {
                cart.map(singleCart => <AddElement
                    cart={singleCart}></AddElement>)
            }
            <h2>Selected Computers: {cart.length}</h2>

            <p><button>Choose One</button></p>
            <p><button>Remove All</button></p>
        </div>
    );
};
const AddElement = (props) => {
    const { name } = props.cart;
    return (
        <div>
            <p><li>{name}</li></p>
        </div>
    )
};

export default Cart;