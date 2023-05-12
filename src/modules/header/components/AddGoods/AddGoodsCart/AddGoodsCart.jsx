import useTotal from '../../../../../hooks/useTotal'
import AddGoodsCartLength from './AddGoodsCartLength'
import { Link } from 'react-router-dom'

const AddGoodsCart = () => {
  const { goodsItem } = useTotal('itemsInGoodsCart')

  return (
    <>
      <Link to="/cart">
        <AddGoodsCartLength goodsLength={goodsItem.length} />
      </Link>
    </>
  )
}

export default AddGoodsCart
