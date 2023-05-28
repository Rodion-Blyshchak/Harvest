import Later from '../../assets/icons/Header/Later'

export const HeaderMenuList = [
  {
    id: 1,
    title: 'Новинки',
    link: '/new',
  },
  {
    id: 2,
    title: 'Аксисуари',
    later: <Later />,
    link: '/assortment',
    dropdown: [
      {
        title: 'СУМКИ',
        links: [
          {
            title: 'КОСТЮМИ',
            link: '/1',
          },
          {
            title: 'КУРТКИ ТА ЖИЛЕТИ',
            link: '/2',
          },
          {
            title: 'ЛЬОН',
            link: '/3',
          },
        ],
      },
      {
        title: 'ІНШЕ',
        links: [
          {
            title: 'КОСТЮМИ',
            link: '/1',
          },
          {
            title: 'КУРТКИ ТА ЖИЛЕТИ',
            link: '/2',
          },
          {
            title: 'ЛЬОН',
            link: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Одяг',
    later: <Later />,
    link: '/assortment',
    dropdown: [
      {
        title: 'ЧОЛОВІКАМ',
        links: [
          {
            title: 'КОСТЮМИ',
            link: '/1',
          },
          {
            title: 'КУРТКИ ТА ЖИЛЕТИ',
            link: '/2',
          },
          {
            title: 'ЛЬОН',
            link: '/3',
          },
        ],
      },
      {
        title: 'ЧОЛОВІКАМ',
        links: [
          {
            title: 'КОСТЮМИ',
            link: '/1',
          },
          {
            title: 'КУРТКИ ТА ЖИЛЕТИ',
            link: '/2',
          },
          {
            title: 'ЛЬОН',
            link: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Магазини',
    link: '/shops',
  },
  {
    id: 5,
    title: 'Про нас',
    later: <Later />,
    link: '/about',
  },
  {
    id: 6,
    titleVariable: 'Знижки',
    link: '/assortment',
  },
]
