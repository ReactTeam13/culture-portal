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
        { image: '/img/person2/portfolio/work1.jpg', description: 'Жилые дома на улице Московской г. Минска' },
        { image: '/img/person2/portfolio/work2.jpg', description: 'Гостиница «Свислочь» в г. Минске' },
        { image: '/img/person2/portfolio/work3.jpg', description: 'Дворец пионеров и школьников' },
        { image: '/img/person2/portfolio/work4.jpg', description: 'Театр юного зрителя, ныне резиденция Президента' },
        { image: '/img/person2/portfolio/work5.jpg', description: 'Здание ЦК КПБ' },
        { image: '/img/person2/portfolio/work6.jpg', description: 'Институт физкультуры в г. Минске' }],
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
        { image: '/img/person2/portfolio/work1.jpg', description: 'Жылыя дамы на вуліцы Маскоўскай г. Мінска' },
        { image: '/img/person2/portfolio/work2.jpg', description: 'Гасцініца «Свіслач» у г. Мінску' },
        { image: '/img/person2/portfolio/work3.jpg', description: 'Палац піянераў і школьнікаў' },
        { image: '/img/person2/portfolio/work4.jpg', description: 'Тэатр юнага гледача, цяпер рэзідэнцыя Прэзідэнта' },
        { image: '/img/person2/portfolio/work5.jpg', description: 'Будынак ЦК КПБ' },
        { image: '/img/person2/portfolio/work6.jpg', description: 'Інстытут фізкультуры ў г. Мінску' }],
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
        { image: '/img/person2/portfolio/work1.jpg', description: 'Residential buildings on the Moscow street of Minsk' },
        { image: '/img/person2/portfolio/work2.jpg', description: 'Hotel Svisloch in Minsk' },
        { image: '/img/person2/portfolio/work3.jpg', description: 'Palace of Pioneers and Schoolchildren' },
        { image: '/img/person2/portfolio/work4.jpg', description: 'The Theater of the Young Spectator, now the residence of the President' },
        { image: '/img/person2/portfolio/work5.jpg', description: 'Building of the Central Committee of the CPB' },
        { image: '/img/person2/portfolio/work6.jpg', description: 'Institute of Physical Education in Minsk' }],
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
  {
    ru: {
      id: 5,
      name: 'Заборский Георгий Владимирович',
      avatar: '/img/person5/avatar/ava.jpg',
      occupation: 'Народный архитектор СССР, заслуженный строитель Беларуси, академик Российской академии архитектуры и строительных наук, академик Белорусской академии архитектуры, лауреат Государственной премии СССР',
      birthDate: '11.11.1909',
      birthPlace: 'г.Минск',
      deathDate: '27.03.1999',
      deathPlace: 'г.Минск',
      locationsCoords: {
        lat: '53.9',
        lng: '27.56667',
      },
      videoId: '_6j9mrxQGso',
      activity: [
        {
          date: '11.11.1909',
          place: 'Минск',
          description: 'Родился в г.Минске',
        },
        {
          date: '1939',
          place: 'Ленинград',
          description: 'Окончил Всероссийскую Академию художествю',
        },
        {
          date: '1939',
          place: 'Минск',
          description: 'В первые дни ушел добровольцем на фронт, был тяжело ранен и попал в госпиталь. Именно там Заборский нарисовал серию эскизов, которые стали основой обелиска, возведенного на площади Победы в Минске',
        },
        {
          date: '1945-1964',
          place: 'Минск',
          description: 'Руководил архитектурно-конструкторскими мастерскими проектных институтов Белгоспроект и Минскпроект и одновременно преподавал на архитектурном отделении Белорусского политехнического института. Принимал активное участие в разработке проектов планировки и застройки Минска, Полоцка, Орши, а также в проектировании площадей Минска: Ленина (Независимости), Центральной (Октябрьской), Круглой (Победы).',
        },
        {
          date: '1952',
          place: 'Минск',
          description: 'Cпроектировал дом для семьи Я. Коласа.',
        },
        {
          date: '1964',
          place: 'Минск',
          description: 'По личному желанию перешел в проектный институт Белгипросельстрой.',
        },
        {
          date: '1971',
          place: 'Минск',
          description: 'Лауреат Государственной премии СССР',
        },
        {
          date: '1981',
          place: 'Минск',
          description: 'Народный архитектор СССР',
        },
        {
          date: '11.11.1979',
          place: 'Минск',
          description: 'Oрден Дружбы народов',
        },
        {
          date: '11.02.1994',
          place: 'Минск',
          description: 'Медаль Франциска Скорины ',
        },
      ],
      works: [
        { image: '/img/person5/portfolio/image1.jpg', description: 'Кинотеатр «Пионер» г. Минска' },
        { image: '/img/person5/portfolio/image2.jpg', description: 'Площадь «Независимости» в г. Минске' },
        { image: '/img/person5/portfolio/image3.jpg', description: 'Октябрьская площадь в г. Минске' },
        { image: '/img/person5/portfolio/image4.jpg', description: 'Площадь «Победы» в г. Минске' },
        { image: '/img/person5/portfolio/image5.jpg', description: 'Дом семьи Якуба Коласа г. Минске' },
        { image: '/img/person5/portfolio/image6.jpg', description: 'Суворовское училище г. Минске' },
      ],
      listOfWorks: [
        {
          year: '1950',
          work: 'Проектирование жилой застройки по ул. Ленина в Минске',
        },
        {
          year: '1950',
          work: 'Были созданы Суворовское училище и здание ЦК ЛКСМБ',
        },
        {
          year: '1952',
          work: 'спроектировал дом для семьи Я.Коласа',
        },
        {
          year: '1952',
          work: 'Был открыт памятник. В. Сталину',
        },
        {
          year: '1954',
          work: 'Был открыт памятник-монумент на пл. Победы.',
        },
      ],
    },
    be: {
      id: 5,
      name: 'Заборскі Георгій Уладзіміравіч',
      avatar: '/img/person5/avatar/ava.jpg',
      occupation: 'Народны архітэктар СССР, заслужаны будаўнік Беларусі, акадэмік Расійскай акадэміі архітэктуры і будаўнічых навук, акадэмік Беларускай акадэміі архітэктуры, лаўрэат Дзяржаўнай прэміі СССР',
      birthDate: '11.11.1909',
      birthPlace: 'г. Мінск',
      deathDate: '27.03.1999',
      deathPlace: 'г. Мінск',
      locationsCoords: {
        lat: '53.9',
        lng: '27.56667',
      },
      videoId: '_6j9mrxQGso',
      activity: [
        {
          date: '11.11.1909',
          place: 'г. Мінск',
          description: 'Нарадзіўся ў г. Мінску',
        },
        {
          date: '1939',
          place: 'Ленінград',
          description: 'Скончыў Усерасійскую Акадэмію мастацтву',
        },
        {
          date: '1939',
          place: 'г. Мінск',
          description: 'У першыя дні пайшоў добраахвотнікам на фронт, быў цяжка паранены і трапіў у шпіталь. Менавіта там Заборскі намаляваў серыю эскізаў, якія сталі асновай абеліска, збудаванага на плошчы Перамогі ў Мінску',
        },
        {
          date: '1945-1964',
          place: 'г. Мінск',
          description: 'Кіраваў архітэктурна-канструктарскімі майстэрнямі праектных інстытутаў Белдзяржпраект і Мінскпраект і адначасова выкладаў на архітэктурным аддзяленні Беларускага політэхнічнага інстытута. Прымаў актыўны ўдзел у распрацоўцы праектаў планіроўкі і забудовы Мінска, Полацка, Оршы, а таксама ў праектаванні плошчаў Мінска: Леніна (Незалежнасці), Цэнтральнай (Кастрычніцкай), Круглай (Перамогі).',
        },
        {
          date: '1952',
          place: 'г. Мінск',
          description: "Спраектаваў дом для сям'і Я. Коласа..",
        },
        {
          date: '1964',
          place: 'г. Мінск',
          description: 'Па асабістым жаданні перайшоў у праектны інстытут Белгіпрасельбуд.',
        },
        {
          date: '1971',
          place: 'г. Мінск',
          description: 'Лаўрэат Дзяржаўнай прэміі СССР',
        },
        {
          date: '1981',
          place: 'г. Мінск',
          description: 'Народны архітэктар СССР',
        },
        {
          date: '11.11.1979',
          place: 'г. Мінск',
          description: 'Ордэн Дружбы народаў',
        },
        {
          date: '11.02.1994',
          place: 'г. Мінск',
          description: 'Медаль Францыска Скарыны',
        },
      ],
      works: [
        { image: '/img/person5/portfolio/image1.jpg', description: 'Кінатэатр "Піянер" г. Мінска' },
        { image: '/img/person5/portfolio/image2.jpg', description: 'Плошча "Незалежнасці" ў г. Мінску' },
        { image: '/img/person5/portfolio/image3.jpg', description: 'Кастрычніцкая плошча ў г. Мінску' },
        { image: '/img/person5/portfolio/image4.jpg', description: 'Плошча "Перамогі" ў г. Мінску' },
        { image: '/img/person5/portfolio/image5.jpg', description: "Дом сям'і Якуба Коласа г. Мінску" },
        { image: '/img/person5/portfolio/image6.jpg', description: 'Сувораўскае вучылішча г. Мінску' },
      ],
      listOfWorks: [
        {
          year: '1950',
          work: 'Праектаванне жылой забудовы па вул.Леніна ў Мінску',
        },
        {
          year: '1950',
          work: 'Былі створаны Сувораўскае вучылішча і будынак ЦК ЛКСМБ',
        },
        {
          year: '1952',
          work: "Спраектаваў дом для сям'і Я. Коласа",
        },
        {
          year: '1952',
          work: 'Быў адкрыты помнік. В. Сталіну',
        },
        {
          year: '1954',
          work: 'Быў адкрыты помнік-манумент на пл. Перамогі.',
        },
      ],
    },
    en: {
      id: 5,
      name: 'Zaborsky Georgy Vladimirovich',
      avatar: '/img/person5/avatar/ava.jpg',
      occupation: "People's architect of the USSR, honored Builder of Belarus, academician of the Russian Academy of architecture and construction Sciences, academician of the Belarusian Academy of architecture, winner of the state prize of the USSR",
      birthDate: '11.11.1909',
      birthPlace: 'Minsk',
      deathDate: '27.03.1999',
      deathPlace: 'Minsk',
      locationsCoords: {
        lat: '53.9',
        lng: '27.56667',
      },
      videoId: '_6j9mrxQGso',
      activity: [
        {
          date: '11.11.1909',
          place: 'Minsk',
          description: 'Born in Minsk',
        },
        {
          date: '1939',
          place: 'Leningrad',
          description: 'Graduated from the all-Russian Academy of arts',
        },
        {
          date: '1939',
          place: 'Minsk',
          description: 'In the first days, he volunteered for the front, was seriously wounded and was taken to the hospital. It was there that Zaborsky drew a series of sketches that became the basis of the obelisk erected on Victory square in Minsk',
        },
        {
          date: '1945-1964',
          place: 'Minsk',
          description: 'He directed the architectural and design workshops of the design institutes Belgosproekt and minskproekt and at the same time taught at the architectural Department of the Belarusian Polytechnic Institute. He took an active part in the development of planning and development projects in Minsk, Polotsk, Orsha, as well as in the design of Minsk squares: Lenin (Independence), Central (Oktyabrskaya), Kruglaya (Pobedy).Руководил архитектурно-конструкторскими мастерскими проектных институтов Белгоспроект и Минскпроект и одновременно преподавал на архитектурном отделении Белорусского политехнического института. Принимал активное участие в разработке проектов планировки и застройки Минска, Полоцка, Орши, а также в проектировании площадей Минска: Ленина (Независимости), Центральной (Октябрьской), Круглой (Победы).',
        },
        {
          date: '1952',
          place: 'Minsk',
          description: 'Designed a house for the family of Ya. Kolas.',
        },
        {
          date: '1964',
          place: 'Minsk',
          description: 'At his own request, he moved to the design Institute of Belgiproselstroy.',
        },
        {
          date: '1971',
          place: 'Minsk',
          description: 'Winner of the state prize of the USSR',
        },
        {
          date: '1981',
          place: 'Minsk',
          description: "People's architect of the USSR",
        },
        {
          date: '11.11.1979',
          place: 'Minsk',
          description: 'Order of Friendship of peoples',
        },
        {
          date: '11.02.1994',
          place: 'Minsk',
          description: 'A Medal Of Francysk Skaryna',
        },
      ],
      works: [
        { image: '/img/person5/portfolio/image1.jpg', description: 'Pioneer cinema in Minsk' },
        { image: '/img/person5/portfolio/image2.jpg', description: 'Independence square in Minsk' },
        { image: '/img/person5/portfolio/image3.jpg', description: 'Oktyabrskaya square in Minsk' },
        { image: '/img/person5/portfolio/image4.jpg', description: 'Victory square in Minsk' },
        { image: '/img/person5/portfolio/image5.jpg', description: 'The family home of Yakub Kolas, Minsk' },
        { image: '/img/person5/portfolio/image6.jpg', description: 'Suvorov military school in Minsk' },
      ],
      listOfWorks: [
        {
          year: '1950',
          work: 'Design of residential buildings on Lenin street in Minsk',
        },
        {
          year: '1950',
          work: 'The Suvorov school and the lksmb Central Committee building were created',
        },
        {
          year: '1952',
          work: 'designed a house for the family of Ya. Kolas',
        },
        {
          year: '1952',
          work: 'A monument to V. Stalin was unveiled',
        },
        {
          year: '1954',
          work: 'It was a monument-a monument on the Victory square.',
        },
      ],
    },
  },
  {
    ru: {
      id: 6,
      name: 'Карако Виктор Иванович',
      avatar: '/img/person6/avatar/ava.jpg',
      occupation: 'Белорусский архитектор, член правления Белорусского союза архитекторов, лауреат премии Ленинского Комсомола Белоруссии, руководитель творческой мастерской',
      birthDate: '29.07.1948',
      birthPlace: 'г.Гродно',
      deathDate: '-',
      deathPlace: '-',
      locationsCoords: {
        lat: '53.6884',
        lng: '23.8258',
      },
      videoId: '',
      activity: [
        {
          date: '29 июля 1948',
          place: 'г. Гродно, Белорусская ССР',
          description: 'родился',
        },
        {
          date: '1966—1972 гг',
          place: 'Минск',
          description: 'Учился на кафедре архитектуры Белорусского политехнического института.',
        },
        {
          date: '1972—1976, 1982—1998',
          place: 'Минск',
          description: 'Работал архитектором, старшим архитектором, главным архитектор проектов, руководителем мастерской в «БЕЛГОСПРОЕКТе»',
        },
        {
          date: '1976—1982',
          place: 'Минск',
          description: 'Руководитель группы архитекторов, главный архитектор проектов, руководитель мастерской БелНИИПградостроительства.',
        },
        {
          date: '1982',
          place: 'г. Новополоцк',
          description: 'Стал лауреатом премии Ленинского Комсомола Белоруссии в области архитектуры за проект дворца молодёжи в г. Новополоцке.',
        },
        {
          date: 'С 1998',
          place: 'Минск',
          description: 'Возглавляет собственную творческую мастерскую',
        },
        {
          date: 'С 2003 г.',
          place: 'Минск',
          description: 'Преподает проектирование на архитектурном факультете Беларуского национального технического университета.',
        },
        {
          date: 'С 2005 г.',
          place: 'Минск',
          description: 'Является членом правления Белорусского союза архитекторов, председателем городской организации БСА и членом Городского Монументально-декоративного Совета.',
        },
      ],
      works: [
        { image: '/img/person6/portfolio/image7.jpg', description: 'Реконструкция здания банка по улице Заславской, 10' },
        { image: '/img/person6/portfolio/image8.jpg', description: 'Молодёжный центр в г. Новополоцк' },
        { image: '/img/person6/portfolio/image9.jpg', description: 'Реконструкция школы 4 в г. Минск' },
        { image: '/img/person6/portfolio/image10.jpg', description: 'Оперный театр в г. Пловдиве' },
        { image: '/img/person6/portfolio/image11.jpg', description: 'Здание МВД по ул. Опанского в г. Минск' },
        { image: '/img/person6/portfolio/image12.jpg', description: 'Судейский домик на гоночном кольце Боровая' },
      ],
      listOfWorks: [
        {
          year: '-',
          work: 'Реконструкция здания банка по улице Заславской, 10',
        },
        {
          year: '-',
          work: 'Молодёжный центр в г. Новополоцк',
        },
        {
          year: '-',
          work: 'Реконструкция школы 4 в г. Минск',
        },
        {
          year: '-',
          work: 'Оперный театр в г. Пловдиве',
        },
        {
          year: '-',
          work: 'Здание МВД по ул. Опанского в г. Минск',
        },
      ],
    },
    be: {
      id: 6,
      name: 'Карака Віктар Іванавіч',
      avatar: '/img/person6/avatar/ava.jpg',
      occupation: 'Беларускі архітэктар, член праўлення Беларускага саюза архітэктараў, лаўрэат прэміі Ленінскага камсамола Беларусі, кіраўнік творчай майстэрні',
      birthDate: '29.07.1948',
      birthPlace: 'г. Гродна',
      deathDate: '-',
      deathPlace: '-',
      locationsCoords: {
        lat: '53.6884',
        lng: '23.8258',
      },
      videoId: '',
      activity: [
        {
          date: '29 ліпеня 1948',
          place: 'г. Гродна, Беларуская ССР',
          description: 'Нарадзіуся',
        },
        {
          date: '1966—1972 гг',
          place: 'Мінск',
          description: 'Вучыўся на кафедры архітэктуры Беларускага політэхнічнага інстытута.',
        },
        {
          date: '1972—1976, 1982—1998',
          place: 'Мінск',
          description: 'Працаваў архітэктарам, старшым архітэктарам, галоўным архітэктар праектаў, кіраўніком майстэрні ў " Белдзяржпраекце»',
        },
        {
          date: '1976—1982',
          place: 'Мінск',
          description: 'Кіраўнік групы архітэктараў, галоўны архітэктар праектаў, кіраўнік майстэрні Белндіпгорадабудаўніцтва.',
        },
        {
          date: '1982',
          place: 'г. Новополоцк',
          description: 'Стаў лаўрэатам прэміі Ленінскага камсамола Беларусі ў галіне архітэктуры за праект Палаца моладзі ў г.Наваполацку',
        },
        {
          date: 'С 1998',
          place: 'Мінск',
          description: 'Узначальвае ўласную творчую майстэрню',
        },
        {
          date: 'С 2003 г.',
          place: 'Мінск',
          description: 'Выкладае праектаванне на Архітэктурным факультэце Беларускага нацыянальнага тэхнічнага ўніверсітэта.',
        },
        {
          date: 'С 2005 г.',
          place: 'Мінск',
          description: "З'яўляецца членам праўлення Беларускага саюза архітэктараў, старшынёй гарадской арганізацыі БСА і членам гарадскога манументальна-дэкаратыўнага Савета.",
        },
      ],
      works: [
        { image: '/img/person6/portfolio/image7.jpg', description: 'Рэканструкцыя будынка банка па вуліцы Заслаўскай, 10' },
        { image: '/img/person6/portfolio/image8.jpg', description: 'Моладзевы цэнтр У Г. Наваполацк' },
        { image: '/img/person6/portfolio/image9.jpg', description: 'Рэканструкцыя школы 4 У Г. Мінск' },
        { image: '/img/person6/portfolio/image10.jpg', description: 'Оперны тэатр у г. Плоўдзіве' },
        { image: '/img/person6/portfolio/image11.jpg', description: 'Будынак МУС па вул. Апанскага ў г. Мінск' },
        { image: '/img/person6/portfolio/image12.jpg', description: 'Судзейскі дамок на гоначным кольцы Баравая' },
      ],
      listOfWorks: [
        {
          year: '-',
          work: 'Рэканструкцыя будынка банка па вуліцы Заслаўскай, 10',
        },
        {
          year: '-',
          work: 'Моладзевы цэнтр У Г. Наваполацк',
        },
        {
          year: '-',
          work: 'Рэканструкцыя школы 4 У Г. Мінск',
        },
        {
          year: '-',
          work: 'Оперны тэатр у г. Плоўдзіве',
        },
        {
          year: '-',
          work: 'Будынак МУС па вул. Апанскага ў г. Мінск',
        },
      ],
    },
    en: {
      id: 6,
      name: 'Karako Viktor Ivanovich',
      avatar: '/img/person6/avatar/ava.jpg',
      occupation: 'Belarusian architect, member of the Board of the Belarusian Union of architects, winner of the Lenin Komsomol of Belarus award, head of the creative workshop',
      birthDate: '29.07.1948',
      birthPlace: 'Grodno',
      deathDate: '-',
      deathPlace: '-',
      locationsCoords: {
        lat: '53.6884',
        lng: '23.8258',
      },
      videoId: '',
      activity: [
        {
          date: 'July 29, 1948',
          place: 'Grodno, Belarusian SSR',
          description: 'Was born',
        },
        {
          date: '1966—1972',
          place: 'Minsk',
          description: 'He studied at the Department of architecture of the Belarusian Polytechnic Institute.',
        },
        {
          date: '1972—1976, 1982—1998',
          place: 'Minsk',
          description: 'He worked as an architect, senior architect, chief project architect, and workshop Manager at Belgosproject»',
        },
        {
          date: '1976—1982',
          place: 'Minsk',
          description: 'Head of the group of architects, chief project architect, head of The belniipgradostroitelstva workshop.',
        },
        {
          date: '1982',
          place: 'Novopolotsk',
          description: 'He was awarded the Lenin Komsomol of Belarus prize in architecture for the project of the youth Palace in Novopolotsk.',
        },
        {
          date: 'Since 1998',
          place: 'Minsk',
          description: 'Heads his own creative workshop',
        },
        {
          date: 'Since 2003',
          place: 'Minsk',
          description: 'He teaches design at the faculty of architecture of the Belarusian national technical University.',
        },
        {
          date: 'Since 2005',
          place: 'Minsk',
          description: "He is a member of the Board of the Belarusian Union of architects, Chairman of the BSA city organization, and a member of the city's Monumental and decorative Council.",
        },
      ],
      works: [
        { image: '/img/person6/portfolio/image7.jpg', description: 'Reconstruction of the Bank building at 10 Zaslavskaya street' },
        { image: '/img/person6/portfolio/image8.jpg', description: 'Youth center in Novopolotsk' },
        { image: '/img/person6/portfolio/image9.jpg', description: 'Reconstruction of school 4 in Minsk' },
        { image: '/img/person6/portfolio/image10.jpg', description: 'Opera house in Plovdiv' },
        { image: '/img/person6/portfolio/image11.jpg', description: 'Ministry of internal Affairs building on opanski street in Minsk' },
        { image: '/img/person6/portfolio/image12.jpg', description: "Judge's house on the Borovaya racing ring" },
      ],
      listOfWorks: [
        {
          year: '-',
          work: 'Reconstruction of the Bank building at 10 Zaslavskaya street',
        },
        {
          year: '-',
          work: 'Youth center in Novopolotsk',
        },
        {
          year: '-',
          work: 'Reconstruction of school 4 in Minsk',
        },
        {
          year: '-',
          work: 'Opera house in Plovdiv',
        },
        {
          year: '-',
          work: 'Ministry of internal Affairs building on opanski street in Minsk',
        },
      ],
    },
  },
  {
    ru: {
      id: 9,
      name: 'Левин Леонид Менделевич',
      avatar: '/img/person9/avatar/ava.jpg',
      occupation: 'Заслуженный архитектор Республики Беларусь',
      birthDate: '25.06.1936',
      birthPlace: 'Минск, Белорусская ССР, СССР',
      deathDate: '01.03.2014',
      deathPlace: 'Минск, Белоруссия',
      locationsCoords: {
        lat: '53.904541',
        lng: '27.561523',
      },
      videoId: '3QJXk6dIpKQ',
      activity: [{
        date: '25.06.1936',
        place: 'Минск',
        description: 'Родился в Минске.',
      },
      {
        date: '1954—1960',
        place: 'Минск',
        description: 'Учился в Белорусском политехническом институте.',
      },
      {
        date: '1960—1967',
        place: 'Минск',
        description: 'Участие в создании парка им. 50-летия Советской власти.',
      },
      {
        date: '1968',
        place: 'Минск',
        description: 'Участие в создании выставочного павильона ВДНХ БССР в Минске.',
      },
      {
        date: '1970',
        place: 'Минск',
        description: 'В составе авторского коллектива был удостоен Ленинской премии за мемориальный комплекс 1968—1969 гг. «Хатынь».',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/8467/8080350229_9ed8cb8e63_h.jpg',
        description: 'Мемориальный комплекс «Хатынь»',
      },
      {
        image: 'https://live.staticflickr.com/8510/8352680273_bcca25c94c_h.jpg',
        description: 'Мемориальный комплекс «Яма». Памятник создавался в течение 8 лет.',
      },
      {
        image: 'https://live.staticflickr.com/4454/37118646123_3a74157531_b.jpg',
        description: 'Памятник Якубу Коласу (Минск)',
      },
      {
        image: 'https://live.staticflickr.com/7130/27390652600_777498e503_h.jpg',
        description: 'Памятник Янке Купале (Минск)',
      },
      {
        image: 'https://live.staticflickr.com/7493/27568593762_9a50064a91_h.jpg',
        description: '«Троицкое предместье» (Минск)',
      },
      {
        image: 'https://live.staticflickr.com/4303/35546085910_c83289faee_h.jpg',
        description: '«Верхний город» (Минск)',
      },
      ],
      listOfWorks: [{
        year: '1969',
        work: 'Мемориальный комплекс «Хатынь»',
      },
      {
        year: '2000',
        work: 'Мемориальный комплекс «Яма». Памятник создавался в течение 8 лет.',
      },
      {
        year: '1972',
        work: 'Памятник Якубу Коласу (Минск)',
      },
      {
        year: '1972',
        work: 'Памятник Янке Купале (Минск)',
      },
      {
        year: '1980—1986',
        work: '«Троицкое предместье» (Минск)',
      },
      ],
    },
    en: {
      id: 9,
      name: 'Levin Leonid Mendelevich',
      avatar: '/img/person9/avatar/ava.jpg',
      occupation: 'Honored Architect of the Republic of Belarus',
      birthDate: '25 .06.1936 ',
      birthPlace: 'Minsk, Belorussian SSR, USSR',
      deathDate: '01 .03.2014 ',
      deathPlace: 'Minsk, Belarus',
      locationsCoords: {
        lat: '53 .904541 ',
        lng: '27 .561523 ',
      },
      videoId: '3QJXk6dIpKQ',
      activity: [{
        date: '25 .06.1936 ',
        place: 'Minsk',
        description: 'Born in Minsk.',
      },
      {
        date: '1954-1960',
        place: 'Minsk',
        description: 'Studied at the Belarusian Polytechnic Institute.',
      },
      {
        date: '1960-1967',
        place: 'Minsk',
        description: 'Participation in the creation of the park to them. 50th anniversary of Soviet power. ',
      },
      {
        date: '1968',
        place: 'Minsk',
        description: 'Participation in the creation of the exhibition pavilion of VDNH BSSR in Minsk.',
      },
      {
        date: '1970',
        place: 'Minsk',
        description: 'As part of the team of authors, he was awarded the Lenin Prize for the memorial complex of 1968-1969. Khatyn. ',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/8467/8080350229_9ed8cb8e63_h.jpg',
        description: 'Khatyn Memorial Complex',
      },
      {
        image: 'https://live.staticflickr.com/8510/8352680273_bcca25c94c_h.jpg',
        description: 'Memorial complex “Pit”. The monument was created over 8 years. ',
      },
      {
        image: 'https://live.staticflickr.com/4454/37118646123_3a74157531_b.jpg',
        description: 'Monument to Yakub Kolas (Minsk)',
      },
      {
        image: 'https://live.staticflickr.com/7130/27390652600_777498e503_h.jpg',
        description: 'Monument to Janka Kupala (Minsk)',
      },
      {
        image: 'https://live.staticflickr.com/7493/27568593762_9a50064a91_h.jpg',
        description: '“Trinity Suburb” (Minsk)',
      },
      {
        image: 'https://live.staticflickr.com/4303/35546085910_c83289faee_h.jpg',
        description: '“Upper Town” (Minsk)',
      },
      ],
      listOfWorks: [{
        year: '1969',
        work: 'Khatyn Memorial Complex',
      },
      {
        year: '2000',
        work: 'Memorial complex “Pit”. The monument was created over 8 years. ',
      },
      {
        year: '1972',
        work: 'Monument to Yakub Kolas (Minsk)',
      },
      {
        year: '1972',
        work: 'Monument to Janka Kupala (Minsk)',
      },
      {
        year: '1980—1986',
        work: 'Trinity Suburb (Minsk)',
      },
      ],
    },
    be: {
      id: 9,
      name: 'Левін Леанід Мендзелевіч',
      avatar: '/img/person9/avatar/ava.jpg',
      occupation: 'Заслужаны архітэктар Рэспублікі Беларусь',
      birthDate: '25 .06.1936 ',
      birthPlace: 'Мінск, Беларуская ССР, СССР',
      deathDate: '01 .03.2014 ',
      deathPlace: 'Мінск, Беларусь',
      locationsCoords: {
        lat: '53 .904541 ',
        lng: '27 .561523 ',
      },
      videoId: '3QJXk6dIpKQ',
      activity: [{
        date: '25 .06.1936 ',
        place: 'Мінск',
        description: 'Нарадзіўся ў Мінску.',
      },
      {
        date: '1954-1960',
        place: 'Мінск',
        description: 'Вучыўся ў Беларускім політэхнічным інстытуце.',
      },
      {
        date: '1960-1967',
        place: 'Мінск',
        description: 'Удзел у стварэнні парка ім. 50-годдзя Савецкай улады. ',
      },
      {
        date: '1968',
        place: 'Мінск',
        description: 'Удзел у стварэнні выставачнага павільёна ВДНГ БССР у Мінску.',
      },
      {
        date: '1970',
        place: 'Мінск',
        description: 'У складзе аўтарскага калектыву быў удастоены Ленінскай прэміі за мемарыяльны комплекс 1968-1969 гг. «Хатынь».',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/8467/8080350229_9ed8cb8e63_h.jpg',
        description: 'Мемарыяльны комплекс «Хатынь»',
      },
      {
        image: 'https://live.staticflickr.com/8510/8352680273_bcca25c94c_h.jpg',
        description: 'Мемарыяльны комплекс "Яма". Помнік ствараўся на працягу 8 гадоў.',
      },
      {
        image: 'https://live.staticflickr.com/4454/37118646123_3a74157531_b.jpg',
        description: 'Помнік Якубу Коласу (Мінск)',
      },
      {
        image: 'https://live.staticflickr.com/7130/27390652600_777498e503_h.jpg',
        description: 'Помнік Янку Купалу (Мінск)',
      },
      {
        image: 'https://live.staticflickr.com/7493/27568593762_9a50064a91_h.jpg',
        description: ' «Траецкае прадмесце» (Мінск)',
      },
      {
        image: 'https://live.staticflickr.com/4303/35546085910_c83289faee_h.jpg',
        description: ' «Верхні горад» (Мінск)',
      },
      ],
      listOfWorks: [{
        year: '1969',
        work: 'Мемарыяльны комплекс «Хатынь»',
      },
      {
        year: '2000',
        work: 'Мемарыяльны комплекс "Яма". Помнік ствараўся на працягу 8 гадоў.',
      },
      {
        year: '1972',
        work: 'Помнік Якубу Коласу (Мінск)',
      },
      {
        year: '1972',
        work: 'Помнік Янку Купалу (Мінск)',
      },
      {
        year: '1980-1986',
        work: ' «Траецкае прадмесце» (Мінск)',
      },
      ],
    },
  },
  {
    ru: {
      id: 12,
      name: 'Шабуневский Станислав Данилович',
      avatar: '/img/person12/avatar/ava.jpg',
      occupation: 'Заслуженный архитектор, автор значительной части застройки Гомеля начала XX в.',
      birthDate: '02.12.1868',
      birthPlace: 'Скородное, Мозырский уезд, Минская губерния, Российская империя',
      deathDate: '1937',
      deathPlace: 'Беломорско-Балтийский канал, Республика Карелия, СССР',
      locationsCoords: {
        lat: '52.419128',
        lng: '30.972269',
      },
      videoId: 'hqpxgVd7eJg',
      activity: [{
        date: '02.12.1868',
        place: 'Скородное, Мозырский уезд, Минская губерния, Российская империя',
        description: 'Родился в деревне Скородное.',
      },
      {
        date: '1870-1880',
        place: 'Слуцк',
        description: 'Учился в четырёхклассной прогимназии, потом закончил Слуцкую гимназию.',
      },
      {
        date: '1870-1880',
        place: 'Петербург',
        description: 'Поступил в Петербургский институт гражданских инженеров, на курс архитектуры у академика С. Шретера.',
      },
      {
        date: '1897',
        place: 'Гомель',
        description: 'Служил в Гомеле на должности городского архитектора.',
      },
      {
        date: '1923',
        place: 'Гомель',
        description: 'Назначен инспектором по строительству Гомельского губернского Совета народного хозяйства.',
      },
      {
        date: '1931',
        place: 'Гомель',
        description: 'работал начальником управления строительного контроля при Гомельском горсовете.',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/4046/4571294561_85d760da2c_c.jpg',
        description: 'Здание бывшего Орловского коммерческого банка.',
      },
      {
        image: 'https://live.staticflickr.com/111/313839194_6c42fcd56b_c.jpg',
        description: 'Бывший доходный дом купца К. П. Грошикова.',
      },
      {
        image: 'https://live.staticflickr.com/1255/1437480802_161278771f_h.jpg',
        description: 'Здание бывшего Виленского коммерческого банка.',
      },
      {
        image: 'https://live.staticflickr.com/2655/4106581231_bcdbd1420c_h.jpg',
        description: 'Дом-коммуна, пр. Ленина',
      },
      ],
      listOfWorks: [{
        year: '1901',
        work: 'Орловский коммерческий банк на углу Румянцевской и Ирининской улиц.',
      },
      {
        year: '1909',
        work: 'Бывший доходный дом купца К. П. Грошикова.',
      },
      {
        year: '1910—1912',
        work: 'Дом, на углу Румянцевской и Троицкой улиц (Здание бывшего Виленского коммерческого банка.)',
      },
      {
        year: '1929—1931',
        work: 'Дом-коммуна, пр. Ленина - жилой дом для рабочих паровозо-вагоноремонтного завода с квартирами коммунального типа',
      },

      ],
    },
    en: {
      id: 12,
      name: 'Shabunevsky Stanislav Danilovich',
      avatar: '/img/person12/avatar/ava.jpg',
      occupation: 'Honored architect, author of a significant part of the construction of Gomel at the beginning of the 20th century.',
      birthDate: '02 .12.1868 ',
      birthPlace: 'Skorodnoye, Mozyr Uyezd, Minsk Province, Russian Empire',
      deathDate: '1937',
      deathPlace: 'White Sea-Baltic Canal, Republic of Karelia, USSR',
      locationsCoords: {
        lat: '52 .419128 ',
        lng: '30 .972269 ',
      },
      videoId: 'hqpxgVd7eJg',
      activity: [{
        date: '02 .12.1868 ',
        place: 'Skorodnoye, Mozyr Uyezd, Minsk Province, Russian Empire',
        description: 'Born in the village of Skorodnoye.',
      },
      {
        date: '1870-1880',
        place: 'Slutsk',
        description: 'Studied in a four-year gymnasium, then graduated from the Slutsk gymnasium.',
      },
      {
        date: '1870-1880',
        place: 'Petersburg',
        description: 'I entered the St. Petersburg Institute of Civil Engineers, a course in architecture with academician S. Schreter.',
      },
      {
        date: '1897',
        place: 'Gomel',
        description: 'Served in Gomel as a city architect.',
      },
      {
        date: '1923',
        place: 'Gomel',
        description: 'Appointed construction inspector of the Gomel Provincial National Economy Council.',
      },
      {
        date: '1931',
        place: 'Gomel',
        description: 'worked as the head of the construction control department at the Gomel City Council.',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/4046/4571294561_85d760da2c_c.jpg',
        description: 'The building of the former Oryol Commercial Bank.',
      },
      {
        image: 'https://live.staticflickr.com/111/313839194_6c42fcd56b_c.jpg',
        description: 'The former apartment building of the merchant K.P. Groshikov.',
      },
      {
        image: 'https://live.staticflickr.com/1255/1437480802_161278771f_h.jpg',
        description: 'The building of the former Vilnius Commercial Bank.',
      },
      {
        image: 'https://live.staticflickr.com/2655/4106581231_bcdbd1420c_h.jpg',
        description: 'House-commune, Lenin Ave',
      },
      ],
      listOfWorks: [{
        year: '1901',
        work: 'Oryol Commercial Bank on the corner of Rumyantsevskaya and Irininskaya streets.',
      },
      {
        year: '1909',
        work: 'The former apartment building of the merchant K.P. Groshikov.',
      },
      {
        year: '1910-1912',
        work: 'House, on the corner of Rumyantsevskaya and Troitskaya Streets (The building of the former Vilna Commercial Bank.)',
      },
      {
        year: '1929-1931',
        work: 'House-commune, Lenin Ave. - residential building for workers of a steam locomotive-car repair plant with communal type apartments',
      },

      ],
    },
    be: {
      id: 12,
      name: 'Шабунеўскага Станіслаў Данілавіч',
      avatar: '/img/person12/avatar/ava.jpg',
      occupation: 'Заслужаны архітэктар, аўтар значнай часткі забудовы Гомеля пачатку XX ст.',
      birthDate: '02 .12.1868 ',
      birthPlace: 'Скароднае, Мазырскі павет, Мінская губерня, Расійская імперыя',
      deathDate: '1937',
      deathPlace: 'Беламорска-Балтыйскі канал, Рэспубліка Карэлія, СССР',
      locationsCoords: {
        lat: '52 .419128 ',
        lng: '30 .972269 ',
      },
      videoId: 'hqpxgVd7eJg',
      activity: [{
        date: '02 .12.1868 ',
        place: 'Скароднае, Мазырскі павет, Мінская губерня, Расійская імперыя',
        description: 'Нарадзіўся ў вёсцы Скароднае.',
      },
      {
        date: '1870-1880',
        place: 'Слуцк',
        description: 'Вучыўся ў четырёхклассной прагімназіі, потым скончыў Слуцкую гімназію.',
      },
      {
        date: '1870-1880',
        place: 'Пецярбург',
        description: 'Паступіў у Пецярбургскі інстытут цывільных інжынераў, на курс архітэктуры ў акадэміка С. Шретер.',
      },
      {
        date: '1897',
        place: 'Гомель',
        description: 'Служыў у Гомелі на пасады гарадскога архітэктара.',
      },
      {
        date: '1923',
        place: 'Гомель',
        description: 'Прызначаны інспектарам па будаўніцтве Гомельскага губернскага Савета народнай гаспадаркі.',
      },
      {
        date: '1931',
        place: 'Гомель',
        description: 'працаваў начальнікам упраўлення будаўнічага кантролю пры Гомельскім гарсавеце.',
      },
      ],
      works: [{
        image: 'https://live.staticflickr.com/4046/4571294561_85d760da2c_c.jpg',
        description: 'Будынак былога Арлоўскага камерцыйнага банка.',
      },
      {
        image: 'https://live.staticflickr.com/111/313839194_6c42fcd56b_c.jpg',
        description: 'Былы даходны дом купца К. П. Грошыкава.',
      },
      {
        image: 'https://live.staticflickr.com/1255/1437480802_161278771f_h.jpg',
        description: 'Будынак былога Віленскага камерцыйнага банка.',
      },
      {
        image: 'https://live.staticflickr.com/2655/4106581231_bcdbd1420c_h.jpg',
        description: 'Дом-камуна, пр. Леніна',
      },
      ],
      listOfWorks: [{
        year: '1901',
        work: 'Арлоўскі камерцыйны банк на рагу Румянцаўскай і Ірынінскай вуліц.',
      },
      {
        year: '1909',
        work: 'Былы даходны дом купца К. П. Грошыкава.',
      },
      {
        year: '1910-1912',
        work: 'Дом, на рагу Румянцаўскай і Траецкай вуліц (Будынак былога Віленскага камерцыйнага банка.)',
      },
      {
        year: '1929-1931',
        work: 'Дом-камуна, пр. Леніна - жылы дом для працоўных паравоза-вагонарамонтнага завода з кватэрамі камунальнай тыпу',
      },

      ],
    },
  },
];

console.log(architectors);

const architectQuery = `
query MyQuery {
  allContentfulArchitect {
    nodes {
      data {
        be {
          activity {
            description
            place
            date
          }
          birthDate
          avatar
          birthPlace
          deathDate
          deathPlace
          id
          listOfWorks {
            work
            year
          }
          locationsCoords {
            lat
            lng
          }
          name
          occupation
          videoId
          works {
            description
            image
          }
        }
        en {
          activity {
            date
            description
            place
          }
          avatar
          birthDate
          deathDate
          birthPlace
          deathPlace
          id
          listOfWorks {
            work
            year
          }
          locationsCoords {
            lat
            lng
          }
          videoId
          occupation
          name
          works {
            description
            image
          }
        }
        ru {
          activity {
            date
            description
            place
          }
          birthDate
          avatar
          birthPlace
          deathDate
          deathPlace
          id
          listOfWorks {
            work
            year
          }
          locationsCoords {
            lat
            lng
          }
          name
          occupation
          videoId
          works {
            description
            image
          }
        }
      }
    }
  }
}
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    const ArchitectorTemplate = path.resolve('src/templates/architector.js');
    resolve(
      graphql(architectQuery)
        .then(({ data: { allContentfulArchitect: { nodes } } }) => {
          nodes.forEach(({ data: architector }) => {
            const lastNameIndex = 0;
            const urlName = architector.en.name.split(' ')[lastNameIndex];
            const url = `architector/${urlName}`;
            createPage({
              path: url,
              component: ArchitectorTemplate,
              context: {
                architector,
              },
            });
            resolve();
          });
        }),
    );
  });
};
