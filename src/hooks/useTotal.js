import { useSelector } from 'react-redux'

const useTotal = (fieldName) => {
  const goodsItem = useSelector((state) => state.goods[fieldName])
  const totalPrice = goodsItem.reduce((acc, data) => (acc += data.id), 0)

  return { goodsItem, totalPrice }
}

export default useTotal
