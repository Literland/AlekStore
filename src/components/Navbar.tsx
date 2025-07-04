import React from 'react';

const categories = [
  { name: 'Maquillaje', href: '#maquillaje' },
  { name: 'Papelería', href: '#papeleria' },
  { name: 'Accesorios', href: '#accesorios' },
  { name: 'Pijamas', href: '#pijamas' },
  { name: 'Novedades', href: '#novedades' },
];

const Navbar: React.FC = () => (
  <nav className="w-full bg-pink-100 shadow-md py-3 px-4 flex justify-center sticky top-0 z-40">
    <ul className="flex gap-6">
      {categories.map(cat => (
        <li key={cat.name}>
          <a
            href={cat.href}
            className="text-pink-700 font-semibold hover:text-pink-900 transition-colors text-lg"
          >
            {cat.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
