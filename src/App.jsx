import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Cart/CartContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Cart from './components/Cart/Cart'
import Product from './pages/Product'

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-[#121212]">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}