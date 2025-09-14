// src/components/Home.jsx
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../utils/pizzas';

const Home = () => (
  <main>
    <Header />
    <section className="container py-4">
      <div className="row g-4">
        {pizzas.map(pizza => (
          <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
            <CardPizza 
              id={pizza.id}
              name={pizza.nombre}
              price={pizza.precio}
              ingredients={pizza.ingredientes}
              img={pizza.imagen}
            />
          </div>
        ))}
      </div>
    </section>
  </main>
)

export default Home
