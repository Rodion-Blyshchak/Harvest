import Cart from '../../assets/icons/Header/Cart'
import useAddAndRemoveGoods from '../../hooks/useAddAndRemoveGoods'
import Button from '../Button/Button'

const AddCart = ({ goodsDataItem }) => {
  const { isItemsInGoods, handleClick } = useAddAndRemoveGoods(
    goodsDataItem,
    'itemsInGoodsCart'
  )

  return (
    <div onClick={handleClick}>
      {isItemsInGoods ? (
        <Button buttonType="green-active">
          <p>Видалити з кошика</p>
        </Button>
      ) : (
        <Button buttonType="green">
          <div className="flex gap-3">
            <p>Додати в кошик</p>
            <Cart className="w-3.5 h-3.5" />
          </div>
        </Button>
      )}
    </div>
  )
}

export default AddCart
