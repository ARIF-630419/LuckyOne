import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeItem }) => {
    return (
        <div className='cart'>

            {
                cart.map(singleCart => <AddElement
                    cart={singleCart}
                    key={singleCart.id}
                ></AddElement>)
            }

            <h2>Selected Computers: {cart.length}</h2>
            <p><button >Choose One</button></p>
            <p><button onClick={removeItem}>Remove All</button></p>
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