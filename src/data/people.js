import avatar1 from '../img/person1/avatar/ava.jpg';
import avatar2 from '../img/person2/avatar/ava.jpg';

import slide1 from '../img/person1/portfolio/work1.jpg';
import slide2 from '../img/person1/portfolio/work2.jpg';
import slide3 from '../img/person1/portfolio/work3.jpg';
import slide4 from '../img/person1/portfolio/work4.jpg';
import slide5 from '../img/person1/portfolio/work5.jpg';
import slide6 from '../img/person1/portfolio/work6.jpg';

import slide7 from '../img/person2/portfolio/work1.jpg';
import slide8 from '../img/person2/portfolio/work2.jpg';
import slide9 from '../img/person2/portfolio/work3.jpg';
import slide10 from '../img/person2/portfolio/work4.jpg';
import slide11 from '../img/person2/portfolio/work5.jpg';
import slide12 from '../img/person2/portfolio/work6.jpg';

export default [
    {
        id: 1,
        name: 'Бакланов Михаил Иванович',
        avatar: avatar1,
        occupation: 'Белорусский советский архитектор. Заслуженный архитектор Белорусской ССР.',
        birthDate: '13.01.1914',
        birthPlace: 'с.Ивановка, Украина',
        deathDate: '23.01.1990',
        deathPlace: 'Минск',
        locationsCoords: {
            lat: '48.2590267',
            lng: '37.4451505'
        }, 
        videoId: '7CsnFSbpUqE',
        activity: [
            {
                date: '13.01.1914',
                place: 'с.Ивановка',
                description: 'Родился в с.Ивановка Донецкой области Украины.'
            },
            {
                date: '1932-1940',
                place: 'Харьков',
                description: 'Учился в Харьковском архитектурно-строительном техникуме, а затем в Харьковском инженерно-строительном институте'
            },
            {
                date: '1940-1944',
                place: 'Польша',
                description: 'Был призван в армию, сражался с фашистами, два года провёл в плену, бежал из плена, примкнул к партизанам.'
            },
            {
                date: '1944-1980',
                place: 'Минск',
                description: 'На протяжении 36 лет работал в Белгоспроекте. Прошёл путь от рядового архитектора до руководителя архитектурно-конструкторской мастерской.'
            }
        ],
        works: [
          { image: slide1, description: 'Национальный академический драматический театр' },
          { image: slide2, description: 'Государственная картинная галерея БССР' },
          { image: slide3, description: 'Белорусский государственный аграрный технический университет' },
          { image: slide4, description: 'Главный корпус Белорусского Государственного университета' },
          { image: slide5, description: 'Библиотечный корпус Белорусского политехнического института' },
          { image: slide6, description: 'Памятник Якубу Коласу в дер. Миколаевщина Минской области' }],
        listOfWorks: [
          {
            year: '1948—1950',
            work:
              'Реконструкция Национального академического драматического театра им. М. Горького в Минске',
          },
          {
            year: '1954—1957',
            work: 'Государственная картинная галерея БССР, ныне Национальный художественный музей Республики Беларусь',
          },
          {
            year: '1960',
            work: 'Учебные корпуса Белорусского института механизации сельского хозяйства, ныне Белорусский государственный аграрный технический университет',
          },
          {
            year: '1966',
            work: 'Главный корпус, корпус радиофизики и электроники Белорусского Государственного университета',
          },
        ]
    },

    {
        id: 2,
        name: 'Воинов Александр Петрович',
        avatar: avatar2,
        occupation: 'Архитектор, ученый, член-корреспондент НАН Беларуси, заслуженный деятель искусств БССР',
        birthDate: '03.12.1902',
        birthPlace: 'г.Колпино, Россия',
        deathDate: '1.10.1987',
        deathPlace: 'Минск',
        locationsCoords: {
            lat: '59.7640792',
            lng: '30.5785257'
        },
        videoId: '-0-cwOtJv_s',
        activity: [
            {
                date: '03.12.1902',
                place: 'Колпино',
                description: 'Родился в г. Колпино под Санкт-Петербургом'
            },
            {
                date: '1924-1929',
                place: 'Москва',
                description: 'Учился на архитектурном факультете Московского высшего художественно-технического института.'
            },
            {
                date: '1930—1941',
                place: 'Минск',
                description: 'Работал в Белгоспроекте, директором которого был назначен, и руководил архитектурной мастерской'
            },
            {
                date: '1941-1949',
                place: 'Минск',
                description: 'Председатель правления Союза архитекторов Белорусской ССР.'
            },
            {
                date: '1948-1973',
                place: 'Минск',
                description: 'Заведующий кафедрой архитектуры, профессор-консультант Белорусского политехнического института'
            },
            {
                date: '1941-1949',
                place: 'Минск',
                description: 'Председатель правления Союза архитекторов Белорусской ССР.'
            }
        ],
        works: [
          { image: slide7, description: 'Жилые дома на улице Московской г. Минска' },
          { image: slide8, description: 'Гостиница «Свислочь» в г. Минске' },
          { image: slide9, description: 'Дворец пионеров и школьников' },
          { image: slide10, description: 'Театр юного зрителя, ныне резиденция Президента' },
          { image: slide11, description: 'Здание ЦК КПБ' },
          { image: slide12, description: 'Институт физкультуры в г. Минске' }],
        listOfWorks: [
          {
            year: '1933—1940',
            work:
              'По проектам А.П. Воинова были построены: гостиница «Беларусь», Дворец пионеров, здание партийных курсов (Высшая партийная школа), жилой дом Белорусского военного округа, Институт физкультуры в Минске, гостиница «Днепр» и жилые дома на Первомайской улице в г. Могилеве',
          },
          {
            year: '1944—1950',
            work: 'Восстановление зданий, разрушенных во время войны, проектированием зданий лечсануправления в Минске, аэровокзала, музея Я. Купалы, Президиума АН БССР, театра юного зрителя'
          },
          {
            year: '1968',
            work: 'За проект Ленинского проспекта (проспект Независимости) г. Минска А.П. Воинову присуждена Государственная премия БССР',
          }
        ]
    }
];
