import React, { useState } from 'react';

export interface FiltersProps {
  categories: string[];
  colors: string[];
  tallas: string[];
  minPrice: number;
  maxPrice: number;
  onFilter: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ categories, colors, tallas, minPrice, maxPrice, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTalla, setSelectedTalla] = useState('');
  const [price, setPrice] = useState(maxPrice);

  const handleFilter = () => {
    onFilter({
      category: selectedCategory,
      color: selectedColor,
      talla: selectedTalla,
      price,
    });
  };

  return (
    <div className="filters-bar">
      <select value={selectedCategory} onChange={e => { setSelectedCategory(e.target.value); handleFilter(); }}>
        <option value="">Categoría</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={selectedColor} onChange={e => { setSelectedColor(e.target.value); handleFilter(); }}>
        <option value="">Color</option>
        {colors.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={selectedTalla} onChange={e => { setSelectedTalla(e.target.value); handleFilter(); }}>
        <option value="">Talla</option>
        {tallas.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <div className="price-filter">
        <label>Precio máx:</label>
        <input type="range" min={minPrice} max={maxPrice} value={price} onChange={e => { setPrice(Number(e.target.value)); handleFilter(); }} />
        <span>S/ {price}</span>
      </div>
    </div>
  );
};

export default Filters;
