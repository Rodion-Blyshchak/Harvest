import AddGoodsLikesModalContent from './AddGoodsLikesModalContent'
import Modal from '../../../../../ui/Modal/Modal'
import AddGoodsLikesLength from './AddGoodsLikesLength'
import useTotal from '../../../../../hooks/useTotal'
import useAddBodyClassNameLock from '../../../../../hooks/useAddBodyClassNameLock'

const AddGoodsLikes = () => {
  const { goodsItem, totalPrice } = useTotal('itemsInGoods')

  const { isLock, setIsLock } = useAddBodyClassNameLock()

  return (
    <>
      <button onClick={() => setIsLock(true)}>
        <AddGoodsLikesLength goodsLength={goodsItem.length} />
      </button>
      <Modal activeModal={isLock} setActiveModal={setIsLock}>
        <AddGoodsLikesModalContent
          goodsItem={goodsItem}
          totalPrice={totalPrice}
          setActiveModal={setIsLock}
        />
      </Modal>
    </>
  )
}

export default AddGoodsLikes
