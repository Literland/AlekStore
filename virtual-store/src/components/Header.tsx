import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Virtual Store</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;