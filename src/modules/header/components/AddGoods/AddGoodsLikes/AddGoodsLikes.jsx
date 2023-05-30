import AddGoodsLikesModalContent from './AddGoodsLikesModalContent'
import Modal from '../../../../../ui/Modal/Modal'
import AddGoodsLikesLength from './AddGoodsLikesLength'
import useTotal from '../../../../../hooks/useTotal'
import useModals from '../../../../../hooks/useModals'

const AddGoodsLikes = () => {
  const { goodsItem, totalPrice } = useTotal('itemsInGoods')

  const { isShowModal, onOpenModal, onCloseModal } = useModals()

  return (
    <>
      <button onClick={onOpenModal}>
        <AddGoodsLikesLength goodsLength={goodsItem.length} />
      </button>
      <Modal isOpen={isShowModal} onClose={() => onCloseModal()}>
        <AddGoodsLikesModalContent
          goodsItem={goodsItem}
          totalPrice={totalPrice}
          onClose={() => onCloseModal()}
        />
      </Modal>
    </>
  )
}

export default AddGoodsLikes
