import { useState } from "react";
import "./App.css";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
};

const productosIniciales: Producto[] = [
  {
    id: 1,
    nombre: "Labial Rosa",
    descripcion: "Labial de larga duración, color rosa intenso.",
    precio: 120,
    imagen: "https://via.placeholder.com/200x120?text=Labial+Rosa",
  },
  {
    id: 2,
    nombre: "Crema Facial",
    descripcion: "Crema hidratante para todo tipo de piel.",
    precio: 250,
    imagen: "https://via.placeholder.com/200x120?text=Crema+Facial",
  },
  {
    id: 3,
    nombre: "Bolso Elegante",
    descripcion: "Bolso de mano para ocasiones especiales.",
    precio: 500,
    imagen: "https://via.placeholder.com/200x120?text=Bolso+Elegante",
  },
];

function App() {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito(carrito.filter((p, i) => i !== id));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>AlekStore - Belleza y Más</h1>
      <h2>Productos</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {productosIniciales.map((producto) => (
          <div key={producto.id} className="product-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100%", height: 120, objectFit: "cover" }}
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>
              <b>${producto.precio}</b>
            </p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>Carrito ({carrito.length})</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              {producto.nombre} - ${producto.precio}{" "}
              <button onClick={() => quitarDelCarrito(idx)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;