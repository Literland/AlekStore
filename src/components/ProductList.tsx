import React, { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import AlekStoreLogo from '../assets/AlekStoreLogo';
import Filters from './Filters';
import './ProductList.css';

const whatsappNumber = '+51929428382';

function getProductMessage(product: Product, selected: Record<string, string>, url: string) {
  let specs = Object.entries(selected)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  return `Hola, quiero comprar el producto: ${product.name} (${specs}). Precio: S/ ${product.price}\n${url}`;
}

const getUnique = (arr: (string | undefined)[]) => Array.from(new Set(arr.filter(Boolean)));

const ProductList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, Record<string, string>>>({});
  const [filtered, setFiltered] = useState<Product[]>(products);

  // Extraer categorías, colores y tallas únicas
  const categories = getUnique(products.map(p => p.options.modelo && p.options.modelo[0])).filter(Boolean) as string[];
  const colors = getUnique(products.flatMap(p => p.options.color || [])).filter(Boolean) as string[];
  const tallas = getUnique(products.flatMap(p => p.options.talla || [])).filter(Boolean) as string[];
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  const handleSelect = (productId: number, option: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [option]: value,
      },
    }));
  };

  const handleFilter = (filters: any) => {
    let result = products;
    if (filters.category) {
      result = result.filter(p => p.options.modelo && p.options.modelo.includes(filters.category));
    }
    if (filters.color) {
      result = result.filter(p => p.options.color && p.options.color.includes(filters.color));
    }
    if (filters.talla) {
      result = result.filter(p => p.options.talla && p.options.talla.includes(filters.talla));
    }
    if (filters.price) {
      result = result.filter(p => p.price <= filters.price);
    }
    setFiltered(result);
  };

  // Generar enlace de detalles (simulado)
  const getProductUrl = (product: Product) => `https://literland.github.io/AlekStore/#producto-${product.id}`;

  return (
    <div className="store-container">
      <header className="store-header">
        <AlekStoreLogo />
        <h1>AlekStore</h1>
        <p>¡Bienvenida a tu tienda de belleza y moda!</p>
      </header>
      <Filters
        categories={categories}
        colors={colors}
        tallas={tallas}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onFilter={handleFilter}
      />
      <div className="products-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id} id={`producto-${product.id}`}>
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
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(getProductMessage(product, selectedOptions[product.id] || {}, getProductUrl(product)))}&amp;source=&amp;data=${encodeURIComponent(product.image)}`}
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
