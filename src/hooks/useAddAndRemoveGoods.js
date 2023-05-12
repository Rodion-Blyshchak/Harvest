import { useDispatch, useSelector } from 'react-redux'
import { addItemInGoods, removeItemInGoods } from '../store/reducers/GoodsSlice'

const useAddAndRemoveGoods = (goodsDataItem, fieldName) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.goods[fieldName])
  const isItemsInGoods = items.some((item) => item.id === goodsDataItem.id)

  const handleClick = (event) => {
    event.stopPropagation()
    if (isItemsInGoods) {
      dispatch(removeItemInGoods({ id: goodsDataItem.id, fieldName }))
    } else {
      dispatch(addItemInGoods({ id: goodsDataItem, fieldName }))
    }
  }

  return { isItemsInGoods, handleClick }
}

export default useAddAndRemoveGoods
