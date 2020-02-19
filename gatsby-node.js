const path = require('path');

const architectors = [
  {
    ru: {
      id: 1,
      name: 'Бакланов Михаил Иванович',
      avatar: '/img/person1/avatar/ava.jpg',
      occupation: 'Белорусский советский архитектор. Заслуженный архитектор Белорусской ССР.',
      birthDate: '13.01.1914',
      birthPlace: 'с.Ивановка, Украина',
      deathDate: '23.01.1990',
      deathPlace: 'Минск',
      locationsCoords: {
        lat: '48.2590267',
        lng: '37.4451505',
      },
      videoId: '7CsnFSbpUqE',
      activity: [
        {
          date: '13.01.1914',
          place: 'с.Ивановка',
          description: 'Родился в с.Ивановка Донецкой области Украины.',
        },
        {
          date: '1932-1940',
          place: 'Харьков',
          description: 'Учился в Харьковском архитектурно-строительном техникуме, а затем в Харьковском инженерно-строительном институте',
        },
        {
          date: '1940-1944',
          place: 'Польша',
          description: 'Был призван в армию, сражался с фашистами, два года провёл в плену, бежал из плена, примкнул к партизанам.',
        },
        {
          date: '1944-1980',
          place: 'Минск',
          description: 'На протяжении 36 лет работал в Белгоспроекте. Прошёл путь от рядового архитектора до руководителя архитектурно-конструкторской мастерской.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'Национальный академический драматический театр' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'Государственная картинная галерея БССР' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Белорусский государственный аграрный технический университет' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'Главный корпус Белорусского Государственного университета' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Библиотечный корпус Белорусского политехнического института' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Памятник Якубу Коласу в дер. Миколаевщина Минской области' }],
      listOfWorks: [
        {
          year: '1948—1950',
          work: 'Реконструкция Национального академического драматического театра им. М. Горького в Минске',
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
      ],
    },
    be: {
      id: 1,
      name: 'Бакланаў Міхаіл Іванавіч',
      avatar: '/img/person1/avatar/ava.jpg',
      occupation: 'Беларускі савецкі архітэктар. Заслужаны архітэктар Беларускай ССР.',
      birthDate: '13.01.1914',
      birthPlace: 'с.Ивановка, Украіна',
      deathDate: '23.01.1990',
      deathPlace: 'Мінск',
      locationsCoords: {
        lat: '48.2590267',
        lng: '37.4451505',
      },
      videoId: '7CsnFSbpUqE',
      activity: [
        {
          date: '13.01.1914',
          place: 'с.Ивановка',
          description: 'Нарадзіўся ў с.Ивановка Данецкай вобласці Украіны.',
        },
        {
          date: '1932-1940',
          place: 'Харкаў',
          description: 'Вучыўся ў Харкаўскім архітэктурна-будаўнічым тэхнікуме, а затым у Харкаўскім інжынерна-будаўнічым інстытуце',
        },
        {
          date: '1940-1944',
          place: 'Польшча',
          description: 'Быў прызваны ў армію, ваяваў з фашыстамі, два гады правёў у палоне, бег з палону, далучыўся да партызанаў.',
        },
        {
          date: '1944-1980',
          place: 'Мінск',
          description: 'На працягу 36 гадоў працаваў у Белдзяржпраекце. Прайшоў шлях ад радавога архітэктара да кіраўніка архітэктурна-канструктарскай майстэрні.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'Нацыянальны акадэмічны драматычны тэатр' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'Дзяржаўная карцінная галерэя БССР' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Беларускі дзяржаўны аграрны тэхнічны універсітэт' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'Галоўны корпус Беларускага Дзяржаўнага універсітэта' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Бібліятэчны корпус Беларускага політэхнічнага інстытута' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Помнік Якубу Коласу ў в. Мікалаеўшчына Мінскай вобласці' }],
      listOfWorks: [
        {
          year: '1948-1950',
          work: 'Рэканструкцыя Нацыянальнага акадэмічнага драматычнага тэатра ім. М. Горкага ў Мінску ',
        },
        {
          year: '1954-1957',
          work: 'Дзяржаўная карцінная галерэя БССР, цяпер Нацыянальны мастацкі музей Рэспублікі Беларусь',
        },
        {
          year: '1960',
          work: 'Вучэбныя корпуса Беларускага інстытута механізацыі сельскай гаспадаркі, цяпер Беларускі дзяржаўны аграрны тэхнічны універсітэт',
        },
        {
          year: '1966',
          work: 'Галоўны корпус, корпус радыёфізікі і электронікі Беларускага Дзяржаўнага універсітэта',
        },
      ],
    },
    en: {
      id: 1,
      name: 'Baklanov Mikhail Ivanovich',
      avatar: '/img/person1/avatar/ava.jpg',
      occupation: 'Belarusian Soviet architect. Honored Architect of the Belarusian SSR.',
      birthDate: '13.01.1914',
      birthPlace: 's.Ivanovka, Ukraine',
      deathDate: '23.01.1990',
      deathPlace: 'Minsk',
      locationsCoords: {
        lat: '48.2590267',
        lng: '37.4451505',
      },
      videoId: '7CsnFSbpUqE',
      activity: [
        {
          date: '13.01.19.1914',
          place: 's.Ivanovka',
          description: 'Born in the village of Ivanovka, Donetsk region of Ukraine.',
        },
        {
          date: '1932-1940',
          place: 'Kharkov',
          description: 'Studied at the Kharkov Architectural and Construction College, and then at the Kharkov Engineering and Construction Institute',
        },
        {
          date: '1940-1944',
          place: 'Poland',
          description: 'He was drafted into the army, fought with the Nazis, spent two years in captivity, escaped from captivity, joined the partisans.',
        },
        {
          date: '1944-1980',
          place: 'Minsk',
          description: 'For 36 years he worked at the Belgosproject. He went from an ordinary architect to the head of an architectural design workshop.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'National Academic Drama Theater' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'State Art Gallery of the BSSR' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Belarusian State Agrarian Technical University' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'The main building of the Belarusian State University' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Library building of the Belarusian Polytechnic Institute' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Monument to Yakub Kolas in village Mikolaevschina of the Minsk region' }],
      listOfWorks: [
        {
          year: '1948-1950',
          work: 'Reconstruction of the National Academic Drama Theater. Gorky in Minsk',
        },
        {
          year: '1954-1957',
          work: 'The State Art Gallery of the BSSR, now the National Art Museum of the Republic of Belarus',
        },
        {
          year: '1960',
          work: 'Educational buildings of the Belarusian Institute of Agricultural Mechanization, now the Belarusian State Agrarian Technical University',
        },
        {
          year: '1966',
          work: 'Main building, building of radiophysics and electronics of the Belarusian State University',
        },
      ],
    },
  },
  {
    ru: {
      id: 2,
      name: 'Воинов Александр Петрович',
      avatar: '/img/person2/avatar/ava.jpg',
      occupation: 'Архитектор, ученый, член-корреспондент НАН Беларуси, заслуженный деятель искусств БССР',
      birthDate: '03.12.1902',
      birthPlace: 'г.Колпино, Россия',
      deathDate: '1.10.1987',
      deathPlace: 'Минск',
      locationsCoords: {
        lat: '59.7640792',
        lng: '30.5785257',
      },
      videoId: '-0-cwOtJv_s',
      activity: [
        {
          date: '03.12.1902',
          place: 'Колпино',
          description: 'Родился в г. Колпино под Санкт-Петербургом',
        },
        {
          date: '1924-1929',
          place: 'Москва',
          description: 'Учился на архитектурном факультете Московского высшего художественно-технического института.',
        },
        {
          date: '1930—1941',
          place: 'Минск',
          description: 'Работал в Белгоспроекте, директором которого был назначен, и руководил архитектурной мастерской',
        },
        {
          date: '1941-1949',
          place: 'Минск',
          description: 'Председатель правления Союза архитекторов Белорусской ССР.',
        },
        {
          date: '1948-1973',
          place: 'Минск',
          description: 'Заведующий кафедрой архитектуры, профессор-консультант Белорусского политехнического института',
        },
        {
          date: '1941-1949',
          place: 'Минск',
          description: 'Председатель правления Союза архитекторов Белорусской ССР.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'Жилые дома на улице Московской г. Минска' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'Гостиница «Свислочь» в г. Минске' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Дворец пионеров и школьников' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'Театр юного зрителя, ныне резиденция Президента' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Здание ЦК КПБ' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Институт физкультуры в г. Минске' }],
      listOfWorks: [
        {
          year: '1933—1940',
          work:
                'По проектам А.П. Воинова были построены: гостиница «Беларусь», Дворец пионеров, здание партийных курсов (Высшая партийная школа), жилой дом Белорусского военного округа, Институт физкультуры в Минске, гостиница «Днепр» и жилые дома на Первомайской улице в г. Могилеве',
        },
        {
          year: '1944—1950',
          work: 'Восстановление зданий, разрушенных во время войны, проектированием зданий лечсануправления в Минске, аэровокзала, музея Я. Купалы, Президиума АН БССР, театра юного зрителя',
        },
        {
          year: '1968',
          work: 'За проект Ленинского проспекта (проспект Независимости) г. Минска А.П. Воинову присуждена Государственная премия БССР',
        },
      ],
    },
    be: {
      id: 2,
      name: 'Воінаў Аляксандр Пятровіч',
      avatar: '/img/person2/avatar/ava.jpg',
      occupation: 'Архітэктар, вучоны, член-карэспандэнт НАН Беларусі, заслужаны дзеяч мастацтваў БССР',
      birthDate: '03.12.1902 ',
      birthPlace: 'г.Колпино, Расія',
      deathDate: '1987/10/01',
      deathPlace: 'Мінск',
      locationsCoords: {
        lat: '59.7640792 ',
        lng: '30.5785257 ',
      },
      videoId: '-0-cwOtJv_s',
      activity: [
        {
          date: '03.12.1902 ',
          place: 'Колпіна',
          description: 'Нарадзіўся ў г. Колпіна пад Санкт-Пецярбургам',
        },
        {
          date: '1924-1929',
          place: 'Масква',
          description: 'Вучыўся на архітэктурным факультэце Маскоўскага вышэйшага мастацка-тэхнічнага інстытута.',
        },
        {
          date: '1930-1941',
          place: 'Мінск',
          description: 'Працаваў у Белдзяржпраекце, дырэктарам якога быў прызначаны, і кіраваў архітэктурнай майстэрні',
        },
        {
          date: '1941-1949',
          place: 'Мінск',
          description: 'Старшыня праўлення Саюза архітэктараў Беларускай ССР.',
        },
        {
          date: '1948-1973',
          place: 'Мінск',
          description: 'Загадчык кафедры архітэктуры, прафесар-кансультант Беларускага політэхнічнага інстытута',
        },
        {
          date: '1941-1949',
          place: 'Мінск',
          description: 'Старшыня праўлення Саюза архітэктараў Беларускай ССР.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'Жылыя дамы на вуліцы Маскоўскай г. Мінска' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'Гасцініца «Свіслач» у г. Мінску' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Палац піянераў і школьнікаў' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'Тэатр юнага гледача, цяпер рэзідэнцыя Прэзідэнта' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Будынак ЦК КПБ' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Інстытут фізкультуры ў г. Мінску' }],
      listOfWorks: [
        {
          year: '1933-1940',
          work: 'Па праектах А.П. Воінава былі пабудаваны: гасцініца «Беларусь», Палац піянераў, будынак партыйных курсаў (Вышэйшая партыйная школа), жылы дом Беларускай ваеннай акругі, Інстытут фізкультуры ў Мінску, гасцініца «Днепр» і жылыя дамы на Першамайскай вуліцы ў г. Магілёве ',
        },
        {
          year: '1944-1950',
          work: 'Аднаўленне будынкаў, разбураных падчас вайны, праектаваннем будынкаў лечсануправления ў Мінску, аэравакзала, музея Я. Купалы, Прэзідыума АН БССР, тэатра юнага гледача',
        },
        {
          year: '1968',
          work: 'За праект Ленінскага праспекта (праспект Незалежнасці) г. Мінска А.П. Воінава прысуджана Дзяржаўная прэмія БССР',
        },
      ],
    },
    en: {
      id: 2,
      name: 'Voinov Alexander Petrovich',
      avatar: '/img/person2/avatar/ava.jpg',
      occupation: 'Architect, scientist, corresponding member of the National Academy of Sciences of Belarus, Honored Artist of the BSSR',
      birthDate: '03.12.1902 ',
      birthPlace: 'Kolpino, Russia',
      deathDate: '1.10.1987',
      deathPlace: 'Minsk',
      locationsCoords: {
        lat: '59.7640792 ',
        lng: '30.5785257 ',
      },
      videoId: '-0-cwOtJv_s',
      activity: [
        {
          date: '03.12.1902 ',
          place: 'Kolpino',
          description: 'Born in the city of Kolpino near St. Petersburg',
        },
        {
          date: '1924-1929',
          place: 'Moscow',
          description: 'Studied at the architectural faculty of the Moscow Higher Artistic and Technical Institute.',
        },
        {
          date: '1930-1941',
          place: 'Minsk',
          description: 'He worked in the Belgosproject, whose director was appointed, and led the architectural workshop',
        },
        {
          date: '1941-1949',
          place: 'Minsk',
          description: 'Chairman of the Board of the Union of Architects of the Belarusian SSR.',
        },
        {
          date: '1948-1973',
          place: 'Minsk',
          description: 'Head of the Department of Architecture, Consulting Professor at the Belarusian Polytechnic Institute',
        },
        {
          date: '1941-1949',
          place: 'Minsk',
          description: 'Chairman of the Board of the Union of Architects of the Belarusian SSR.',
        },
      ],
      works: [
        { image: '/img/person1/portfolio/work1.jpg', description: 'Residential buildings on the Moscow street of Minsk' },
        { image: '/img/person1/portfolio/work2.jpg', description: 'Hotel Svisloch in Minsk' },
        { image: '/img/person1/portfolio/work3.jpg', description: 'Palace of Pioneers and Schoolchildren' },
        { image: '/img/person1/portfolio/work4.jpg', description: 'The Theater of the Young Spectator, now the residence of the President' },
        { image: '/img/person1/portfolio/work5.jpg', description: 'Building of the Central Committee of the CPB' },
        { image: '/img/person1/portfolio/work6.jpg', description: 'Institute of Physical Education in Minsk' }],
      listOfWorks: [
        {
          year: '1933-1940',
          work: 'According to the projects of A.P. Voinov were built: the Belarus Hotel, the Palace of Pioneers, the building of party courses (Higher Party School), the residential building of the Belarusian Military District, the Institute of Physical Education in Minsk, the Dnipro Hotel and residential buildings on Pervomaiskaya Street in Mogilev',
        },
        {
          year: '1944-1950',
          work: 'Restoration of buildings destroyed during the war by the design of the medical treatment buildings in Minsk, the airport terminal, the Y. Kupala Museum, the Presidium of the BSSR Academy of Sciences, the theater for young spectators',
        },
        {
          year: '1968',
          work: 'For the project of Leninsky Prospekt (Independence Avenue) of Minsk A.P. Voinov awarded the State Prize of the BSSR',
        },
      ],
    },
  },
];
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    const ArchitectorTemplate = path.resolve('src/templates/architector.js');
    resolve(
      architectors.forEach((architector, index) => {
        const url = `architector/${index}`;
        createPage({
          path: url,
          component: ArchitectorTemplate,
          context: {
            architector,
          },
        });
        resolve();
      }),
    );
  });
};
