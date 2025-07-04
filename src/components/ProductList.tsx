import React, { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import AlekStoreLogo from '../assets/AlekStoreLogo';
import Filters from './Filters';

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
    <div className="max-w-7xl mx-auto px-4">
      <header className="flex flex-col items-center gap-2 py-4">
        <AlekStoreLogo />
        <h1 className="text-2xl font-bold text-pink-700">AlekStore</h1>
        <p className="text-pink-500">¡Bienvenida a tu tienda de belleza y moda!</p>
      </header>
      <Filters
        categories={categories}
        colors={colors}
        tallas={tallas}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onFilter={handleFilter}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {filtered.map((product) => (
          <div className="bg-white rounded-xl shadow-lg hover:shadow-pink-200 transition-shadow flex flex-col items-center p-4 relative" key={product.id} id={`producto-${product.id}`}>
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-2 rounded-lg border border-pink-100 bg-pink-50" />
            <h2 className="text-lg font-semibold text-pink-700 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-2 text-center">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-2 w-full justify-center">
              {product.options.talla && (
                <select className="border rounded px-2 py-1 text-sm" onChange={e => handleSelect(product.id, 'Talla', e.target.value)}>
                  <option value="">Talla</option>
                  {product.options.talla.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              )}
              {product.options.color && (
                <select className="border rounded px-2 py-1 text-sm" onChange={e => handleSelect(product.id, 'Color', e.target.value)}>
                  <option value="">Color</option>
                  {product.options.color.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              )}
              {product.options.modelo && (
                <select className="border rounded px-2 py-1 text-sm" onChange={e => handleSelect(product.id, 'Modelo', e.target.value)}>
                  <option value="">Modelo</option>
                  {product.options.modelo.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              )}
            </div>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-pink-600 font-bold text-lg">S/ {product.price}</span>
              <a
                className="ml-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded flex items-center gap-1 transition-colors text-sm shadow"
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(getProductMessage(product, selectedOptions[product.id] || {}, getProductUrl(product)))}&source=&data=${encodeURIComponent(product.image)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar y Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
