import React from 'react';
import { products } from '../data/products';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Selecciona los primeros 3 productos como destacados (puedes cambiar la lógica)
const featured = products.slice(0, 3);

const FeaturedProducts: React.FC = () => (
  <section className="max-w-5xl mx-auto my-8">
    <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
      <FaStar className="text-yellow-400" /> Novedades y Destacados
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {featured.map((product, i) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center border border-pink-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <img src={product.image} alt={product.name} className="w-28 h-28 object-contain mb-2 rounded-lg bg-pink-50" />
          <h3 className="text-lg font-semibold text-pink-700 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2 text-center">{product.description}</p>
          <span className="text-pink-600 font-bold text-lg mb-2">S/ {product.price}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
