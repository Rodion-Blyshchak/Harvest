import useAdaptive from '../../../hooks/useAdaptive'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import HeaderMobile from './HeaderMobile/HeaderMobile'

const Header = () => {
  const adaptive = useAdaptive()

  return adaptive ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header
