import Backpack from '../../../assets/images/Main/ProductCard/Backpack.png'
import Bag from '../../../assets/images/Main/ProductCard/Bag.png'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import Banner from './Banner/Banner'
import Advantages from './Advantages/Advantages'
import ProductCard from './ProductCard/ProductCard'
import About from './About/About'
import Gallery from './Gallery/Gallery'

const Main = () => (
  <>
    <Banner />
    <div className="background-body">
      <Advantages />
      <ProductCard
        image={Backpack}
        title={'РЮКЗАК "SOLVER 2" ЧОРНИЙ'}
        link={'/assortment'}
      />
      <About />
      <ProductCard
        isImageFirst
        image={Bag}
        title={'СУМКА "FLORIDA" ЕКОШКІРА, ЧОРНА'}
        link={'/assortment'}
      />
      <Gallery />
      <ScrollTop />
    </div>
  </>
)

export default Main
