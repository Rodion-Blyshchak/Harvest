import { useDispatch, useSelector } from 'react-redux'
import { addItemInGoods, removeItemInGoods } from '../store/reducers/GoodsSlice'

const useAddAndRemoveGoods = (goodsDataItem, fieldName) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.goods[fieldName])
  const isItemsInGoods = productList.some((product) => product.id === goodsDataItem.id)

  const handleClick = (event) => {
    event.stopPropagation()
    if (isItemsInGoods) {
      dispatch(removeItemInGoods({ product: goodsDataItem, fieldName }))
    } else {
      dispatch(addItemInGoods({ product: goodsDataItem, fieldName }))
    }
  }

  return { isItemsInGoods, handleClick }
}

export default useAddAndRemoveGoods
