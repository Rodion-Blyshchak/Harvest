import useAdaptive from '../../../../hooks/useAdaptive'
import BannerDesktop from './BannerDesktop/BannerDesktop'
import UnitGoodsCard from './UnitGoodsCard/UnitGoodsCard'

const Banner = () => {
  const adaptive = useAdaptive()

  return adaptive ? <UnitGoodsCard /> : <BannerDesktop />
}

export default Banner
