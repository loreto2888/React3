

## Hito 3 - Pizzería Mamá Mía 🍕

¡Bienvenido/a al proyecto **Pizzería Mamá Mía**!

Este proyecto corresponde al Hito 3 del bootcamp Desafío Latam. Es una aplicación web desarrollada con React y Vite que simula el sitio de una pizzería, permitiendo:

- Autenticación de usuario (login).
- Listado de pizzas con imágenes, nombres, precios e ingredientes.
- Agregar pizzas al carrito y modificar cantidades.
- Realizar la compra y vaciar el carrito.
- Navegación entre páginas mediante un Navbar.
- Componentes reutilizables (Header, Footer, CardPizza, etc).
- Estilos modernos y responsivos en CSS.

---


## ¿Cómo usar la app?

1. Ingresa con tu email y contraseña en la página de Login 123456, luego aceptas y te lleva a --->Explora las pizzas disponibles en la página principal.
3. Agrega las pizzas que desees al carrito--->Accede al carrito para modificar cantidades o realizar la compra.
5. Al pagar, el carrito  del boton verde se vacía y puedes seguir comprando.


## Características principales

Paso 1: Login y registro de usuario.
Paso 2 : Listado de pizzas con imágenes, nombres, precios e ingredientes y boton agregar a carrito.
Paso 3 : Carrito de compras  boton verde esquina derecha arriba con suma total y opción de pagar.
- Navegación entre Home, Login, Register y Carrito.
- Componentes reutilizables y contexto para el carrito.
- Estilos modernos y responsivos.


## Estructura del proyecto

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Register.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   └── utils/
│       ├── format.js
│       └── pizzas.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```



## Autor

- Johanna Barrientos
- Desafío Latam — Hito 3

---

¡Gracias por visitar este proyecto! Si tienes sugerencias o encuentras algún error, no dudes en abrir un issue o hacer un pull request.
