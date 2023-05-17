import useTotal from '../../../../../hooks/useTotal'
import AddGoodsCartLength from './AddGoodsCartLength'
import { Link } from 'react-router-dom'

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
