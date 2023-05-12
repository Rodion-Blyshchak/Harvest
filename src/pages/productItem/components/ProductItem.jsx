import useImplementationRequest from '../../../hooks/useImplementationRequest'
import IsLoading from '../../../ui/IsLoading/IsLoading'
import ProductItemContent from './ProductItemContent/ProductItemContent'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'

const ProductItem = () => {
  const { isLoading, getData } = useImplementationRequest()

  return (
    <section>
      {isLoading ? <IsLoading /> : <ProductItemContent getData={getData} />}
      <ScrollTop />
    </section>
  )
}

export default ProductItem
