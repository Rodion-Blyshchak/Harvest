import Advantages from './Advantages/Advantages'
import Banner from './Banner/Banner'
import ProductCard from './ProductCard/ProductCard'
import roll_mini from '../../../assets/images/Main/ProductCard/ROLL_MINI.png'
import polly from '../../../assets/images/Main/ProductCard/POLLY.png'
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
          image={roll_mini}
          title={'РЮКЗАК "ROLL MINI" ПРИНТ КВІТИ'}
          link={'/assortment'}
        />
        <About />
        <ProductCard
          isImageFirst
          image={polly}
          title={'СПІДНИЦІ "POLLY"'}
          link={'/assortment'}
        />
        <Gallery />
        <ScrollTop />
      </div>
    </>
  )
}

export default Main
