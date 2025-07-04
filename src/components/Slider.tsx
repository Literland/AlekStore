import React, { useState } from 'react';

// Imágenes de ejemplo (puedes reemplazar por las tuyas en src/assets/slider)
const images = [
  '/AlekStore/img/slider/slider1.jpg',
  '/AlekStore/img/slider/slider2.jpg',
  '/AlekStore/img/slider/slider3.jpg',
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-4 mb-8">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-56 object-cover rounded-xl shadow-lg border border-pink-100"
      />
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-pink-200 text-pink-700 rounded-full p-2 shadow">
        &#8592;
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-pink-200 text-pink-700 rounded-full p-2 shadow">
        &#8594;
      </button>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === current ? 'bg-pink-500' : 'bg-pink-200'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
