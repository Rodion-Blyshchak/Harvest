import useTotal from '../../../../../hooks/useTotal'
import { Link } from 'react-router-dom'
import AddGoodsCartLength from './AddGoodsCartLength'

const AddGoodsCart = ({ styleFill }) => {
  const { goodsItem } = useTotal('itemsInGoodsCart')

  return (
    <Link to="/cart">
      <AddGoodsCartLength
        goodsLength={goodsItem.length}
        styleFill={styleFill}
      />
    </Link>
  )
}

export default AddGoodsCart
