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
            <a href={'/product/${product}'>
            <img src={product.image} alt={product.name} />
            <div class="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Add to cart</button>
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
