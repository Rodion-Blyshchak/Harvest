import CartListFilling from './CartLIstFilling/CartListFilling'
import ScrollTop from '../../../ui/ScrollTop/ScrollTop'
import CartTotalPrice from './CartTotalPrice/CartTotalPrice'
import useAdaptive from '../../../hooks/useAdaptive'
import classNames from 'classnames'

const Cart = () => {
  const adaptive = useAdaptive()

  return (
    <section className="py-8">
      <div
        className={classNames(
          adaptive ? '_container' : '_container flex gap-9 justify-between'
        )}
      >
        <CartListFilling />
        <CartTotalPrice />
      </div>
      <ScrollTop />
    </section>
  )
}

export default Cart