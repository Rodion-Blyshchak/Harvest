import { Link } from 'react-router-dom'
import { HeaderListIcon } from '../../../consts/Header/HeadersListIcons'
import AddGoodsLikes from './AddGoods/AddGoodsLikes/AddGoodsLikes'
import AddGoodsCart from './AddGoods/AddGoodsCart/AddGoodsCart'

const HeaderListIconsForUser = ({ filter, className }) => {
  const filterListIconsItem = HeaderListIcon.filter(
    (menuIcon) => menuIcon.id !== filter
  )
  return (
    <ul className="flex gap-4">
      {filterListIconsItem.map((menuIcon) => (
        <li key={menuIcon.id}>
          <Link to={menuIcon.link} className={className}>
            {menuIcon.icon}
          </Link>
        </li>
      ))}
      <li>
        <AddGoodsCart styleFill="fill-white" />
      </li>
      <li>
        <AddGoodsLikes />
      </li>
    </ul>
  )
}

export default HeaderListIconsForUser
