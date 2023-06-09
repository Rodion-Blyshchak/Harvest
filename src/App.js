import { Route, Routes } from 'react-router-dom'
import { Header } from './modules/header'
import { Main } from './pages/main'
import { Footer } from './modules/footer'
import { Assortment } from './pages/assortment'
import { ProductItem } from './pages/productItem'
import { Cart } from './pages/cart'
import { Novelty } from './pages/novelty'
import { Shops } from './pages/shops'
import { About } from './pages/about'
import { User } from './pages/user'
import { Search } from './pages/search'

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/assortment/item" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/new" element={<Novelty />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
    <Footer />
  </>
)

export default App
