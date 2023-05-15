import useAdaptive from '../../../hooks/useAdaptive'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import HeaderMobile from './HeaderMobile/HeaderMobile'

const Header = () => {
  const isMobile = useAdaptive()

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header
