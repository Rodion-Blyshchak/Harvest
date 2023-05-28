import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeaderModalContent = ({ dropdownList }) => {
  console.log('dropdown', dropdownList)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${dropdownList.length}, minmax(0, 1fr))`,
      }}
    >
      {dropdownList.map((dropdown, index) => (
        <div key={index}>
          <h2>{dropdown.title}</h2>
          <ul>
            {dropdown.links.map((linkItem) => (
              <li key={linkItem.link}>
                <Link to={linkItem.link}>{linkItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default HeaderModalContent
