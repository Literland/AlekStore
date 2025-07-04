import React, { useState, useEffect } from 'react';
import AlekStoreLogo from '../assets/AlekStoreLogo';

// Definir el tipo Product compatible con la API
interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  image?: string; // Opcional, si luego lo agregas en la base de datos
}

const whatsappNumber = '+51929428382';

function getProductMessage(product: Product, selected: Record<string, string>, url: string) {
  let specs = Object.entries(selected)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  return `Hola, quiero comprar el producto: ${product.nombre} (${specs}). Precio: S/ ${product.precio}\n${url}`;
}

const ProductList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, Record<string, string>>>({});
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/admin/api_productos.php')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(() => setProductos([]));
  }, []);

  // Generar enlace de detalles (simulado)
  const getProductUrl = (product: Product) => `https://literland.github.io/AlekStore/#producto-${product.id}`;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="flex flex-col items-center gap-2 py-4">
        <AlekStoreLogo />
        <h1 className="text-2xl font-bold text-pink-700">AlekStore</h1>
        <p className="text-pink-500">¡Bienvenida a tu tienda de belleza y moda!</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {productos.map((product) => (
          <div className="bg-white rounded-xl shadow-lg hover:shadow-pink-200 transition-shadow flex flex-col items-center p-4 relative" key={product.id} id={`producto-${product.id}`}>
            {/* Si tienes imágenes en la base de datos, usa product.image */}
            <h2 className="text-lg font-semibold text-pink-700 mb-1">{product.nombre}</h2>
            <p className="text-sm text-gray-500 mb-2 text-center">{product.descripcion}</p>
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-pink-600 font-bold text-lg">S/ {product.precio}</span>
              <a
                className="ml-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded flex items-center gap-1 transition-colors text-sm shadow"
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(getProductMessage(product, selectedOptions[product.id] || {}, getProductUrl(product)))}&source=&data=`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar y Comprar
              </a>
            </div>
          </div>
        ))}
        {productos.length === 0 && (
          <div className="col-span-full text-center text-gray-400">No hay productos disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
