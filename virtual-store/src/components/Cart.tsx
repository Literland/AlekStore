import React from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.name} - Quantity: {item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;