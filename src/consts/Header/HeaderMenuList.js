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
        title: 'Рюкзаки',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Жіночі рюкзаки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Чоловічі рюкзаки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Унісекс рюкзаки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Дитячі рюкзаки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Тактичні рюкзаки',
            linkSubmenu: '/assortment',
          },
        ],
      },
      {
        title: 'Сумки',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Сумки жіночі',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Сумки чоловічі',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Поясні сунки',
            linkSubmenu: '/assortment',
          },
        ],
      },
      {
        title: 'Інше',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Аксисуари для рюкзаків',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Жіночі портмоне',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Чоловічі портмоне',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Чохли для ноутбуків',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Подарункові сертифікати',
            linkSubmenu: '/assortment',
          },
        ],
      },
      {
        title: 'Колекції',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Active',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Classic',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Shuttle',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Vintage',
            linkSubmenu: '/assortment',
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
        title: 'Жінкам',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Harvest x nu ot',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Костюми',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Куртки та жилети',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Льон',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Сукні',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Футболки і топи',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Худі та світшоти',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Шорти та спідниці',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Штани',
            linkSubmenu: '/assortment',
          },
        ],
      },
      {
        title: 'Чоловікам',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Костюми',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Куртки та жилети',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Льон',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Футболки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Худі та світшоти',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Шорти',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Штани',
            linkSubmenu: '/assortment',
          },
        ],
      },
      {
        title: 'Дітям',
        linkTitle: '/assortment',
        submenu: [
          {
            name: 'Костюми',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Куртки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Футболки',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Худі та світшоти',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Шорти',
            linkSubmenu: '/assortment',
          },
          {
            name: 'Штани',
            linkSubmenu: '/assortment',
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
    dropdown: [
      {
        title: 'Про бренд',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Наші цінності',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Виробництво',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Блог',
        linkTitle: '/',
        submenu: [],
      },
    ],
  },
  {
    id: 6,
    title: 'Інформація',
    later: <Later />,
    link: '/about',
    dropdown: [
      {
        title: 'Контакти',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Оплата і доставка',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Гарантія і повернення',
        linkTitle: '/',
        submenu: [],
      },
      {
        title: 'Корпоративні та оптові замовлення',
        linkTitle: '/',
        submenu: [],
      },
    ],
  },
  {
    id: 7,
    titleVariable: 'Знижки',
    link: '/assortment',
  },
]
