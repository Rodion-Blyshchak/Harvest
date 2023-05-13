import useAdaptive from '../../../../hooks/useAdaptive'
import BannerDesktop from './BannerDesktop/BannerDesktop'
import UnitGoodsCard from './UnitGoodsCard/UnitGoodsCard'

const Banner = () => {
  const isMobile = useAdaptive()

  return isMobile ? <UnitGoodsCard /> : <BannerDesktop />
}

export default Banner
