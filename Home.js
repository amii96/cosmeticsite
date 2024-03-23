

import './Home.css'; 

function Header() {
    return (
        <header id="main-header">
            <h1 id="logo"> SERENE COSMETICS </h1>

           
            <nav id="nav-bar">
                <ul>
                
                    <li><a href="Home.js" target="_self" className="nav-link active">Home</a></li>
                    <li><a href="Product.js" target="_self" className="nav-link"> Product </a></li>
                    <li><a href="Basket.js" target="_self" className="nav-link"> Basket </a></li>
                </ul>
            </nav>
        </header>
    );
}

function Main() {
    return (
        <main>
            <div className="text-center" id="img-container">
                <img src="https://i.pinimg.com/736x/aa/b1/05/aab1054504197c9c65e60393c23e0cbe.jpg" alt="main" id="main-image" />
            </div>
            <div id="description-container">
                <p className="text-center text-jim">Serene Cosmetics - Organic and Natural products</p>
            </div>
        </main>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />

            <footer id="main-footer">
                <p>SERENE COSMETICS</p>
                <div id="Shipping">
                    <p>Free Shipping on orders over £50</p>
                </div>
                <div id="social">
                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="img-social-link" /></a>
                    <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/2840/tiktok-logo-512.png" alt="Tiktok" className="img-social-link" /></a>
                    <a href="#"><img src="https://i.pinimg.com/736x/87/de/51/87de5128049f5fa9ac124b80434b08da.jpg" alt="Twitter" className="img-social-link" /></a>
                </div>
            </footer>
        </div>
    );
}

export default App;
