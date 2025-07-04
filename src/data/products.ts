export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  options: {
    talla?: string[];
    color?: string[];
    modelo?: string[];
  };
}

// Puedes editar fácilmente los productos aquí:
export const products: Product[] = [
  {
    id: 1,
    name: 'Set de Maquillaje Profesional',
    description: 'Incluye sombras, rubor, labiales y más. Ideal para todo tipo de piel.',
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6e2e1e7e2e1e7e2e1e7e2e1e7e2e1e7e.jpg',
    price: 120,
    options: {
      color: ['Natural', 'Colorido'],
      modelo: ['Clásico', 'Compacto']
    }
  },
  {
    id: 2,
    name: 'Bolso Elegante',
    description: 'Bolso de cuero sintético, varios colores y modelos.',
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bolso-temu.jpg',
    price: 85,
    options: {
      color: ['Negro', 'Rojo', 'Beige'],
      modelo: ['Grande', 'Mediano', 'Pequeño']
    }
  },
  {
    id: 3,
    name: 'Blusa de Moda',
    description: 'Blusa fresca y cómoda, perfecta para cualquier ocasión.',
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/blusa-temu.jpg',
    price: 60,
    options: {
      talla: ['S', 'M', 'L', 'XL'],
      color: ['Blanco', 'Azul', 'Rosa']
    }
  }
];
