
import React from 'react';
import './Product.css';

function Header() {
    return (
        <header id="main-header">
            <h1 id="logo">SERENE COSMETICS</h1>
            <nav id="nav-bar">
                <ul>
                    <li><a href="index.html" target="_self" className="nav-link">Home</a></li>
                    <li><a href="products.html" target="_self" className="nav-link active">Products</a></li>
                    <li><a href="About us.html" target="_self" className="nav-link">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Product(props) {
    return (
        <div className="product">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span className="price">{props.price}</span>
        </div>
    );
}

function Main() {
    return (
        <main>
            <div className="product-grid">
                <Product
                    image="https://i.pinimg.com/736x/fc/7c/f9/fc7cf90e4d966d771be3c912bb3bbb3c.jpg"
                    title="Foundation"
                    description="All Natural Foundation (Multiple Shades)"
                    price="£15.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/S3d366005d3144304b87a04b97b8e1aafn/NO-logo-Contouring-Makeup-Concealer-Liquid-Concealer-Corretivo-Maquiagem-Waterproof-Liquid-Concealer-Private-Label-Contour.jpg"
                    title="Concealer"
                    description="All Natural Concealer (Multiple Shades)"
                    price="£12.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/Sd4f693b7ecf3432ab47d7dca79baa744M/No-Logo-Blusher-Milk-Tea-Blush-Peach-Pallete-Single-Colors-Face-Mineral-Pigment-Cheek-Powder-Makeup.jpg"
                    title="Blush"
                    description="All Natural Blush (Multiple Shades)"
                    price="£9.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/S9c047f5acd234d689b1c297cc363071es/No-Logo-2-Color-Grey-Brown-Shadow-Natural-Contour-Plate-Highlight-Makeup-Face-Powder-Cosmetic-Waterproof.jpg"
                    title="Bronzer"
                    description="All Natural Bronzer (Multiple Shades)"
                    price="£9.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/Sb49166bbd09b447890ffaf9547659f98a/59mm-Single-Highlighter-Powder-No-Logo-Pearl-Glitter-Powder-Mashed-Potatoes-Metal-Brightening-Highlights-Private-Label.jpg"
                    title="Highlighter"
                    description="All Natural Highlighter (Multiple Shades)"
                    price="£9.99"
                />
                <Product
                    image="https://sc04.alicdn.com/kf/HTB1S.o2s_lYBeNjSszcq6zwhFXaI.jpg"
                    title="Mascara"
                    description="All Natural Mascara (Multiple Shades)"
                    price="£8.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/Hdd698952b19f44a29f240a7531eddab5I.jpg_640x640Q90.jpg_.webp"
                    title="Eyeliner"
                    description="All Natural Eyeliner (Multiple Shades)"
                    price="£10.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/Ha66de7d062df469d9cc4471363c6064aX.jpg_640x640Q90.jpg_.webp"
                    title="Lipgloss"
                    description="All Natural Lipgloss (Multiple Shades)"
                    price="£7.99"
                />
                <Product
                    image="https://ae01.alicdn.com/kf/H5e85e852cb784445a7ace167b5ee4ef9c.jpg_640x640q90.jpg"
                    title="Lipliner"
                    description="All Natural Lipliner (Multiple Shades)"
                    price="£6.99"
                />
            </div>
        </main>
    );
}


function Footer() {
    return (
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
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
