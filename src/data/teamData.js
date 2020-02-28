const githubIcon = 'https://image.flaticon.com/icons/svg/733/733553.svg';
const mailIcon = 'https://image.flaticon.com/icons/svg/481/481651.svg';
const teamData = {
  en: {
    title: {
      header: ['Meet', 'our team'],
      article: {
        h: 'Meet our team',
        p: 'Our group tried to realize the ideas of each participant and put our soul into our project. We hope you enjoyed it!',
      },
    },
    team: [
      {
        id: 0,
        position: 'Team leader, developer',
        name: 'Artsiom',
        contribution:
        'Development of the progect enviroment',
        githubId: 'Xelsoid',
        links: [
          { name: 'github', src: 'https://github.com/Xelsoid', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:artemrevtovich@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 2,
        position: 'Frontend developer',
        name: 'Maryna',
        contribution: 'Development of storybook reusable components',
        githubId: 'maryna-js',
        links: [
          {
            name: 'github',
            src: 'https://github.com/maryna-js',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:maryna@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 1,
        position: 'Disigner, developer',
        name: 'Anastasia',
        contribution: 'Development of the portal disigh and components structure',
        githubId: 'Nasta313',
        links: [
          {
            name: 'github',
            src: 'https://github.com/Nasta313',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:Vlasovec.nasta313@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 3,
        position: 'Frontend developer',
        name: 'Irina',
        contribution:
        'Development of the project enviroment, components structure',
        githubId: 'irbris',
        links: [
          { name: 'github', src: 'https://github.com/irbris', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:irina@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 4,
        position: 'Frontend developer',
        name: 'Anton',
        contribution:
        'Development of the progect enviroment, cms, translation setting',
        githubId: 'anton-rsschool',
        links: [
          {
            name: 'github',
            src: 'https://github.com/anton-rsschool',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:anton@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 5,
        position: 'Team leader, developer',
        name: 'Ksenia',
        contribution:
        'Components developer, responsive design',
        githubId: 'KseniaKuntsevich',
        links: [
          {
            name: 'github',
            src: 'https://github.com/KseniaKuntsevich',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:kse.kuntsevich@icloud.com',
            icon: mailIcon,
          },
        ],
      },
    ],
  },
  ru: {
    title: {
      header: ['Встречайте,', 'Наша команда'],
      article: {
        h: 'Встречайте нашу команду',
        p: 'Наша большая группа постаралась воплотить идеи каждого участника и вложить душу в наш проект. Надеемся, Вам он понравился!',
      },
    },
    team: [
      {
        id: 0,
        position: 'Тим лидер, разработчик',
        name: 'Артем',
        contribution:
        'Разработка окружения, сборка проекта, gatsbyjs, storybook',
        githubId: 'Xelsoid',
        links: [
          { name: 'github', src: 'https://github.com/Xelsoid', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:artemrevtovich@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 2,
        position: 'Фронтенд разработчик',
        name: 'Марина',
        contribution: 'Разработка и создание компонентов для сторибука',
        githubId: 'maryna-js',
        links: [
          {
            name: 'github',
            src: 'https://github.com/maryna-js',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:maryna@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 1,
        position: 'Дизайнер, фронтенд разработчик',
        name: 'Анастасия',
        contribution: 'Разработка дизайна сайта, создание компонентов',
        githubId: 'Nasta313',
        links: [
          {
            name: 'github',
            src: 'https://github.com/Nasta313',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:Vlasovec.nasta313@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 3,
        position: 'Фронтенд разработчик',
        name: 'Ирина',
        contribution: 'Разработка окружения и архитектуры сайта',
        githubId: 'irbris',
        links: [
          { name: 'github', src: 'https://github.com/irbris', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:irina@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 4,
        position: 'Фронтенд разработчик',
        name: 'Антон',
        contribution:
        'Сборка проекта, настройка cms и перевода',
        githubId: 'anton-rsschool',
        links: [
          {
            name: 'github',
            src: 'https://github.com/anton-rsschool',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:anton@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 5,
        position: 'Тим лидер, разработчик',
        name: 'Ксения',
        contribution:
        'Реализация компонентов. Адаптивная верстка',
        githubId: 'KseniaKuntsevich',
        links: [
          {
            name: 'github',
            src: 'https://github.com/KseniaKuntsevich',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:kse.kuntsevich@icloud.com',
            icon: mailIcon,
          },
        ],
      },
    ],
  },
  be: {
    title: {
      header: ['Сустракайце,', 'Наша каманда'],
      article: {
        h: 'Сустракайце нашу каманду',
        p: 'Наша вялікая група паспрабавала ўвасобіць ідэі кожнага ўдзельніка і ўкласці душу ў наш праект. Спадзяемся, што Вам ён спадабаўся!',
      },
    },
    team: [
      {
        id: 0,
        position: 'Цім лідэр, дэвелапер',
        name: 'Арцём',
        contribution:
        'Распрацоўка акружэння, зборка праекта, gatsbyjs, storybook',
        githubId: 'Xelsoid',
        links: [
          { name: 'github', src: 'https://github.com/Xelsoid', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:artemrevtovich@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 2,
        position: 'Фронтенд дэвелапер',
        name: 'Марына',
        contribution: 'Распрацоўка стварэнне кампанентаў для сторибука',
        githubId: 'maryna-js',
        links: [
          {
            name: 'github',
            src: 'https://github.com/maryna-js',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:maryna@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 1,
        position: 'Дызайнер, дэвелапер',
        name: 'Анастасія',
        contribution:
        'Распрацоўка дызайну сайта, рэалізацыя кампанентаў',
        githubId: 'Nasta313',
        links: [
          {
            name: 'github',
            src: 'https://github.com/Nasta313',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:Vlasovec.nasta313@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 3,
        position: 'Фронтенд дэвелапер',
        name: 'Ірына',
        contribution: 'Распрацоўка акружэння, архітэктуры сайта',
        githubId: 'irbris',
        links: [
          { name: 'github', src: 'https://github.com/irbris', icon: githubIcon },
          {
            name: 'mail',
            src: 'mailto:irina@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 4,
        position: 'Фронтенд дэвелапер',
        name: 'Антон',
        contribution:
        'Распрацоўка акружэння, cms, перакладу. Зборка праекта',
        githubId: 'anton-rsschool',
        links: [
          {
            name: 'github',
            src: 'https://github.com/anton-rsschool',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:anton@gmail.com',
            icon: mailIcon,
          },
        ],
      },
      {
        id: 5,
        position: 'Цім лідэр, дэвелапер',
        name: 'Ксенія',
        contribution:
        'Рэалізацыя кампанентаў, адаптыўная вёрстка',
        githubId: 'KseniaKuntsevich',
        links: [
          {
            name: 'github',
            src: 'https://github.com/KseniaKuntsevich',
            icon: githubIcon,
          },
          {
            name: 'mail',
            src: 'mailto:kse.kuntsevich@icloud.com',
            icon: mailIcon,
          },
        ],
      },
    ],
  },
};
export default teamData;
