import Advantages from './Advantages/Advantages'
import Banner from './Banner/Banner'
import ProductCard from './ProductCard/ProductCard'
import Backpack from '../../../assets/images/Main/ProductCard/Backpack.png'
import Bag from '../../../assets/images/Main/ProductCard/Bag.png'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'

const Main = () => {
  return (
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
}

export default Main
