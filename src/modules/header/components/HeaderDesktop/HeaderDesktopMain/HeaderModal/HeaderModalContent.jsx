import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeaderModalContent = ({ dropdownList, setIsLock }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid _container"
      style={{
        gridTemplateColumns: `repeat(${dropdownList.length}, minmax(0, 1fr))`,
      }}
    >
      {dropdownList.map((dropdown, index) => (
        <div key={index}>
          <Link to={dropdown.linkTitle} onClick={() => setIsLock(false)}>
            <p className="text-center py-1 uppercase">{dropdown.title}</p>
          </Link>
          <ul>
            {dropdown.submenu.map((linkItem, index) => (
              <li key={index}>
                <Link
                  to={linkItem.linkSubmenu}
                  onClick={() => setIsLock(false)}
                  className="py-1.5 flex justify-center header__text uppercase 
                  hover:text-yellow-500 duration-200"
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default HeaderModalContent
