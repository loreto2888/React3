import { formatCLP } from '../utils/format'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
            <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
            <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", width: "250px", background: "#fff" }}>
              <h2>{name}</h2>
              <p><strong>Precio:</strong> ${formatCLP(price)}</p>
              <h4>Ingredientes:</h4>
              <ul>
                {ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
    </div>
  )
}

export default CardPizza
