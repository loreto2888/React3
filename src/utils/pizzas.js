// pizzas.js
// Array de objetos con información de pizzas
export const pizzas = [
  {
    id: 1,
    nombre: "Margarita",
    precio: 8000,
    imagen: "/img/margarita.jpg",
    ingredientes: ["Queso mozzarella", "Tomate", "Albahaca"]
  },
  {
    id: 2,
    nombre: "Pepperoni",
    precio: 9000,
    imagen: "/img/pepperoni.jpg",
    ingredientes: ["Queso mozzarella", "Pepperoni", "Tomate"]
  },
  {
    id: 3,
    nombre: "Cuatro Quesos",
    precio: 9500,
    imagen: "/img/cuatroquesos.jpg",
    ingredientes: ["Mozzarella", "Parmesano", "Gorgonzola", "Provolone"]
  },
  {
    id: 4,
    nombre: "Vegetariana",
    precio: 8500,
    imagen: "/img/vegetariana.jpg",
    ingredientes: ["Mozzarella", "Tomate", "Pimiento", "Aceitunas", "Cebolla"]
  },
  {
    id: 5,
    nombre: "Hawaiana",
    precio: 9000,
    imagen: "/img/hawaiana.jpg",
    ingredientes: ["Mozzarella", "Jamón", "Piña"]
  },
  {
    id: 6,
    nombre: "Napolitana",
    precio: 9500,
    imagen: "/img/napolitana.jpg",
    ingredientes: ["Mozzarella", "Tomate", "Anchoas", "Orégano"]
  }
];

// Array para simular el carrito de compras
export const pizzaCart = [
  {
    id: 1,
    nombre: "Margarita",
    precio: 8000,
    imagen: "/img/margarita.jpg",
    cantidad: 1
  },
  {
    id: 2,
    nombre: "Pepperoni",
    precio: 9000,
    imagen: "/img/pepperoni.jpg",
    cantidad: 2
  }
];