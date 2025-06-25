import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import Mens from './components/mens/Mens'
import Women from './components/women/Women'
import Jewellery from './components/jewellery/Jewellery'
import Perfumes from './components/perfume/Perfumes'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'
import Subscribe from './components/home/Subscribe/Subscribe'
import Notification from './components/home/notification/Notification'
import Newoffer from './components/categories/newoffer/Newoffer'
import Cart from './components/cart/Cart'
import Singleproduct from './components/singleproducts/Singleproduct'
import Final from './components/cart/final/Final'

function App() {
  return (
  
    <BrowserRouter>
  <Header />
  <Subscribe />
  <Notification />
  <Routes>
  <Route path="/"  element= {<Home />}  />
    {/* <Route path='subscribe' element = {<Subscribe/>}/>
    <Route path="/" element={<Home />} /> */}
    <Route path="/categories" element={<Categories />} />
    <Route path="/mens" element={<Mens />} />
    <Route path="/women" element={<Women />} />
    <Route path="/jewellery" element={<Jewellery />} />
    <Route path="/perfumes" element={<Perfumes />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/newoffer" element={<Newoffer />} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/product/:id' element={<Singleproduct/>} />
    <Route path='/final' element={<Final/>} />
    
  </Routes>
  <Footer />
</BrowserRouter>

  )
}

export default App
