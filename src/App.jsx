import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProductList from "./pages/ProductList"; // CHECK: Is this file exactly named ProductList.jsx?
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Terms from './pages/Terms';
import Cart from './pages/Cart'; 
import Checkout from './pages/Checkout'; 

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <main className="min-vh-100"> {/* Ensures footer stays at bottom */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;