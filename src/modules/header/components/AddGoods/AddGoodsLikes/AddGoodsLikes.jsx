import useModals from '../../../../../hooks/useModals'
import useTotal from '../../../../../hooks/useTotal'
import AddGoodsLikesModalContent from './AddGoodsLikesModalContent'
import AddGoodsLikesLength from './AddGoodsLikesLength'
import Modal from '../../../../../ui/Modal/Modal'

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
