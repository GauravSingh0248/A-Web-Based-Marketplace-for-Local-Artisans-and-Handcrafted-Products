import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/pottery" element={<ShopCategory category="pottery" />} />
          <Route path="/textiles" element={<ShopCategory category="textiles" />} />
          <Route path="/painting" element={<ShopCategory category="painting" />} />
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App