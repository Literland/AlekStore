import React from 'react';

const ProductDetail: React.FC = () => {
    // Sample product data, replace with actual data fetching logic
    const product = {
        id: 1,
        name: 'Sample Product',
        description: 'This is a detailed description of the sample product.',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/150'
    };

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <h2>${product.price.toFixed(2)}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;