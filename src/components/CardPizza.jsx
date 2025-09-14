import React from "react";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();
  return (
    <div className="card h-100 shadow-sm" style={{ width: "250px", margin: "auto" }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }} />
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", background: "#fff" }}>
        <h2>{name}</h2>
        <p><strong>Precio:</strong> ${price.toLocaleString('es-CL')}</p>
        <h4>Ingredientes:</h4>
        <ul>
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        <button style={{ marginTop: "12px", padding: "8px 16px", background: "#2a9d8f", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          onClick={() => addToCart({ id, nombre: name, precio: price, imagen: img })}
        >Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
