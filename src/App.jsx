function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#products-index">All products</a> | <a href="#products-new">New product</a>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New product</h1>
      <form>
        <div>
          Type: <input type="text" />
        </div>
        <div>
          Model: <input type="text" />
        </div>
        <button type="submit">Look-up product</button>
      </form>
    </div>
  );
}

function ProductsIndex() {
  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="products">
        <h2>Electric Toothbrush</h2>
        <img
          src="https://i5.walmartimages.com/asr/2dd09fee-6b40-41e0-95f3-61fe62f4c252.ca67de8763077368b4fac62a44ebaae6.jpeg"
          alt=""
        />
        <p>Brand: Oral B</p>
        <p>Price: $199.99</p>
        <button>More info</button>
        <div className="products">
          <h2>Tooth Paste</h2>
          <img src="https://images-na.ssl-images-amazon.com/images/I/819DqDJJywL.jpg" alt="" />
          <p>Brand: Fine Vine</p>
          <p>Price: $15.99</p>
          <button>More info</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2024</p>
    </footer>
  );
}

function ProductsPage() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
