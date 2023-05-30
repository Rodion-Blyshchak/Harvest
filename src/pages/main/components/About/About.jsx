import classNames from 'classnames'
import AboutList from './AboutList'
import styles from './About.module.scss'

const About = () => {
  return (
    <section className="py-10">
      <div className={classNames(styles.body, '_container')}>
        <p className="title__article text-center">ПРО HARVEST</p>
        <p className="description__article text-center">
          Ми створюємо надійні сумки та рюкзаки для ваших подорожей, відкриттів
          та бурхливого міського життя. Почавши свою роботу у 2015 році і до
          сьогодні нашим основним принципом є дизайн, виправданий функцією.
        </p>
        <AboutList journalsList />

        <p className="title__article text-center">Наші нагороди</p>
        <AboutList awardsList />
      </div>
    </section>
  )
}

export default About
