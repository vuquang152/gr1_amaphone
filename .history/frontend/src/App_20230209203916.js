import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amaphone</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
        {
          data.products.map((product) => ( 
          <div className="product" key ={product.slug}>
            <img src={product.image} alt={product.name} />
            <div class="">
              <p>{product.name}</p>
              <p>{product.price}</p>

            </div>
          </div>
          ))
        }
        </div>
      </main>
    </div>
  );
}

export default App;
