import { useState } from 'react'
import AddGoodsLikesModalContent from './AddGoodsLikesModalContent'
import Modal from '../../../../../ui/Modal/Modal'
import AddGoodsLikesLength from './AddGoodsLikesLength'
import useTotal from '../../../../../hooks/useTotal'

const AddGoodsLikes = () => {
  const { goodsItem, totalPrice } = useTotal('itemsInGoods')
  const [activeModal, setActiveModal] = useState(false)

  return (
    <>
      <button onClick={() => setActiveModal(true)}>
        <AddGoodsLikesLength goodsLength={goodsItem.length} />
      </button>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <AddGoodsLikesModalContent
          goodsItem={goodsItem}
          totalPrice={totalPrice}
        />
      </Modal>
    </>
  )
}

export default AddGoodsLikes
