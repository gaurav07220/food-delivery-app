import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes basename="/food-delivery-app/">
        <Route path="/" element={<Home />} />
        <Route path='foods' element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  )
}
