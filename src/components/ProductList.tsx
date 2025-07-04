import React, { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import AlekStoreLogo from '../assets/AlekStoreLogo';
import './ProductList.css';

const whatsappNumber = '+51929428382';

function getProductMessage(product: Product, selected: Record<string, string>) {
  let specs = Object.entries(selected)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  return `Hola, quiero comprar el producto: ${product.name} (${specs}). Precio: S/ ${product.price}`;
}

const ProductList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, Record<string, string>>>({});

  const handleSelect = (productId: number, option: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [option]: value,
      },
    }));
  };

  return (
    <div className="store-container">
      <header className="store-header">
        <AlekStoreLogo />
        <h1>AlekStore</h1>
        <p>¡Bienvenida a tu tienda de belleza y moda!</p>
      </header>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-options">
              {product.options.talla && (
                <select onChange={e => handleSelect(product.id, 'Talla', e.target.value)}>
                  <option value="">Talla</option>
                  {product.options.talla.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              )}
              {product.options.color && (
                <select onChange={e => handleSelect(product.id, 'Color', e.target.value)}>
                  <option value="">Color</option>
                  {product.options.color.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              )}
              {product.options.modelo && (
                <select onChange={e => handleSelect(product.id, 'Modelo', e.target.value)}>
                  <option value="">Modelo</option>
                  {product.options.modelo.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              )}
            </div>
            <div className="product-footer">
              <span className="product-price">S/ {product.price}</span>
              <a
                className="whatsapp-btn"
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(getProductMessage(product, selectedOptions[product.id] || {}))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar y Comprar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
