// pizzas.js
// Array de objetos con información de pizzas
export const pizzas = [
  {
    id: 1,
    nombre: "Margarita",
    precio: 8000,
  imagen: "https://images.unsplash.com/photo-1601924579440-3cc8c7a3a4b6?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Queso mozzarella", "Tomate", "Albahaca"]
  },
  {
    id: 2,
    nombre: "Pepperoni",
    precio: 9000,
  imagen: "https://images.unsplash.com/photo-1548365328-8b8490c0b2c1?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Queso mozzarella", "Pepperoni", "Tomate"]
  },
  {
    id: 3,
    nombre: "Cuatro Quesos",
    precio: 9500,
  imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Mozzarella", "Parmesano", "Gorgonzola", "Provolone"]
  },
  {
    id: 4,
    nombre: "Vegetariana",
    precio: 8500,
  imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Mozzarella", "Tomate", "Pimiento", "Aceitunas", "Cebolla"]
  },
  {
    id: 5,
    nombre: "Hawaiana",
    precio: 9000,
  imagen: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Mozzarella", "Jamón", "Piña"]
  },
  {
    id: 6,
    nombre: "Napolitana",
    precio: 9500,
  imagen: "https://images.unsplash.com/photo-1519864600265-abb224a0c01b?auto=format&fit=crop&w=400&q=80",
    ingredientes: ["Mozzarella", "Tomate", "Anchoas", "Orégano"]
  }
];

// Array para simular el carrito de compras
export const pizzaCart = [
  {
    id: 1,
    nombre: "Margarita",
    precio: 8000,
    imagen: "https://www.pizzamammamia.cl/images/margarita.jpg",
    cantidad: 1
  },
  {
    id: 2,
    nombre: "Pepperoni",
    precio: 9000,
    imagen: "https://www.pizzamammamia.cl/images/pepperoni.jpg",
    cantidad: 2
  }
];
