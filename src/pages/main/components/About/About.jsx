import { motion } from 'framer-motion'
import classNames from 'classnames'
import AboutList from './AboutList'
import styles from './About.module.scss'
import useBasicAnimation from '../../../../hooks/useBasicAnimation'

const About = () => {
  const animationY = useBasicAnimation({
    hidden: { y: -100 },
  })

  const animationX = useBasicAnimation({
    hidden: { x: -100, y: 0 },
    visible: { x: 0 },
  })

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="py-10"
    >
      <div className={classNames(styles.body, '_container')}>
        <motion.p
          variants={animationX}
          custom={1}
          className="title__article text-center"
        >
          ПРО HARVEST
        </motion.p>
        <motion.p
          variants={animationX}
          custom={2}
          className="description__article text-center"
        >
          Ми створюємо надійні сумки та рюкзаки для ваших подорожей, відкриттів
          та бурхливого міського життя. Почавши свою роботу у 2015 році і до
          сьогодні нашим основним принципом є дизайн, виправданий функцією.
        </motion.p>
        <AboutList journalsList />

        <motion.p
          variants={animationY}
          custom={4}
          className="title__article text-center"
        >
          Наші нагороди
        </motion.p>
        <AboutList awardsList />
      </div>
    </motion.section>
  )
}

export default About
