import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/plants">Plants</Link> | 
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <Link to="/plants">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;