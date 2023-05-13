import { Route, Routes } from 'react-router-dom'
import { Header } from './modules/header'
import { Main } from './pages/main'
import Footer from './modules/footer/Footer'
import { Assortment } from './pages/assortment'
import { ProductItem } from './pages/productItem'
import { Cart } from './pages/cart'

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/assortment/item" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    <Footer />
  </>
)

export default App
