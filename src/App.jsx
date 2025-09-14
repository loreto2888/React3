// src/App.jsx

// import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
// import Home from './components/Home';
// import Login from './components/Login';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        {/* <Home /> */}
        {/* <Login setView={setView} /> */}
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
