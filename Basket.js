

import React, { useState } from 'react';
import './Basket.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to cart
  const addToCart = (productName, price) => {
    
    setCartItems([...cartItems, { name: productName, price: price }]);
  };

  // Function to calculate the total of items in cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function for the "Buy Now" button click
  const buyNow = () => {
    // Redirect to "BUY NOW" page
    window.location.href = "buy_now.js";
  };

  return (
    <div>
      <header id="main-header">
        <h1 id="logo">SERENE COSMETICS</h1>
        <nav id="nav-bar">
          <ul>
            <li><button className="nav-link" onClick={() => window.location.href = "index.html"}>Home</button></li>
            <li><button className="nav-link active" onClick={() => window.location.href = "products.html"}>Products</button></li>
            <li><button className="nav-link" onClick={() => window.location.href = "About us.html"}>About Us</button></li>
            <li><button className="nav-link" onClick={() => window.location.href = "basket.html"}>Basket</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product">
            <img src="https://i.pinimg.com/736x/fc/7c/f9/fc7cf90e4d966d771be3c912bb3bbb3c.jpg" alt="Product 1" />
            <h2>Foundation</h2>
            <p>All Natural Foundation (Multiple Shades)</p>
            <span className="price">£15.99</span>
            <button onClick={() => addToCart('Foundation', 15.99)}>Add to Cart</button>
          </div>
          {/* Product 2 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/S3d366005d3144304b87a04b97b8e1aafn/NO-logo-Contouring-Makeup-Concealer-Liquid-Concealer-Corretivo-Maquiagem-Waterproof-Liquid-Concealer-Private-Label-Contour.jpg" alt="Product 2" />
            <h2>Concealer</h2>
            <p>All Natural Concealer (Multiple Shades)</p>
            <span className="price">£12.99</span>
            <button onClick={() => addToCart('Concealer', 12.99)}>Add to Cart</button>
          </div>
          {/* Product 3 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/Sd4f693b7ecf3432ab47d7dca79baa744M/No-Logo-Blusher-Milk-Tea-Blush-Peach-Pallete-Single-Colors-Face-Mineral-Pigment-Cheek-Powder-Makeup.jpg" alt="Product 3" />
            <h2>Blush</h2>
            <p>All Natural Blush (Multiple Shades)</p>
            <span className="price">£9.99</span>
            <button onClick={() => addToCart('Blush', 9.99)}>Add to Cart</button>
          </div>
          {/* Product 4 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/S9c047f5acd234d689b1c297cc363071es/No-Logo-2-Color-Grey-Brown-Shadow-Natural-Contour-Plate-Highlight-Makeup-Face-Powder-Cosmetic-Waterproof.jpg" alt="Product 4" />
            <h2>Bronzer</h2>
            <p>All Natural Bronzer (Multiple Shades)</p>
            <span className="price">£9.99</span>
            <button onClick={() => addToCart('Bronzer', 9.99)}>Add to Cart</button>
          </div>
          {/* Product 5 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/Sb49166bbd09b447890ffaf9547659f98a/59mm-Single-Highlighter-Powder-No-Logo-Pearl-Glitter-Powder-Mashed-Potatoes-Metal-Brightening-Highlights-Private-Label.jpg" alt="Product 5" />
            <h2>Highlighter</h2>
            <p>All Natural Highlighter (Mupltiple Shades)</p>
            <span className="price">£9.99</span>
            <button onClick={() => addToCart('Highlighter', 9.99)}>Add to Cart</button>
          </div>
          {/* Product 6 */}
          <div className="product">
            <img src="https://sc04.alicdn.com/kf/HTB1S.o2s_lYBeNjSszcq6zwhFXaI.jpg" alt="Product 6" />
            <h2>Mascara</h2>
            <p>All Natural Mascara (Mupltiple Shades)</p>
            <span className="price">£8.99</span>
            <button onClick={() => addToCart('Mascara', 8.99)}>Add to Cart</button>
          </div>
          {/* Product 7 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/Hdd698952b19f44a29f240a7531eddab5I.jpg_640x640Q90.jpg_.webp" alt="Product 7" />
            <h2>Eyeliner</h2>
            <p>All Natural Eyeliner (Multiple Shades)</p>
            <span className="price">£10.99</span>
            <button onClick={() => addToCart('Eyeliner', 10.99)}>Add to Cart</button>
          </div>
          {/* Product 8 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/Ha66de7d062df469d9cc4471363c6064aX.jpg_640x640Q90.jpg_.webp" alt="Product 8" />
            <h2>Lipgloss</h2>
            <p>All Natural Lipgloss (Multiple Shades)</p>
            <span className="price">£7.99</span>
            <button onClick={() => addToCart('Lipgloss', 7.99)}>Add to Cart</button>
          </div>
          {/* Product 9 */}
          <div className="product">
            <img src="https://ae01.alicdn.com/kf/H5e85e852cb784445a7ace167b5ee4ef9c.jpg_640x640q90.jpg" alt="Product 9" />
            <h2>Lipliner</h2>
            <p>All Natural Lipliner (Multiple Shades)</p>
            <span className="price">£6.99</span>
            <button onClick={() => addToCart('Lipliner', 6.99)}>Add to Cart</button>
          </div>
        </div>

        {/* shopping cart */}
        <div id="basket">
          <h2>Basket</h2>
          <ul id="cart-items">
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - £{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: £{calculateTotal().toFixed(2)}</p>
          <button onClick={buyNow}>Buy Now</button>
        </div>
      </main>

      <footer id="main-footer">
        <p>SERENE COSMETICS</p>
        <div id="Shipping">
          <p>Free Shipping on orders over £50</p>
        </div>
        <div id="social">
          <button onClick={() => window.location.href = "#"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="img-social-link" /></button>
          <button onClick={() => window.location.href = "#"}><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/2840/tiktok-logo-512.png" alt="Tiktok" className="img-social-link" /></button>
          <button onClick={() => window.location.href = "#"}><img src="https://i.pinimg.com/736x/87/de/51/87de5128049f5fa9ac124b80434b08da.jpg" alt="Twitter" className="img-social-link" /></button>
        </div>
      </footer>
    </div>
  );
}

export default App;
