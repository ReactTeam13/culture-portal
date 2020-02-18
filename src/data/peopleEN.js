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
    name: 'Baklanov Mikhail Ivanovich',
    avatar: avatar1,
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
      { image: slide1, description: 'National Academic Drama Theater' },
      { image: slide2, description: 'State Art Gallery of the BSSR' },
      { image: slide3, description: 'Belarusian State Agrarian Technical University' },
      { image: slide4, description: 'The main building of the Belarusian State University' },
      { image: slide5, description: 'Library building of the Belarusian Polytechnic Institute' },
      { image: slide6, description: 'Monument to Yakub Kolas in village Mikolaevschina of the Minsk region' }],
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

  {
    id: 2,
    name: 'Voinov Alexander Petrovich',
    avatar: avatar2,
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
      { image: slide7, description: 'Residential buildings on the Moscow street of Minsk' },
      { image: slide8, description: 'Hotel Svisloch in Minsk' },
      { image: slide9, description: 'Palace of Pioneers and Schoolchildren' },
      { image: slide10, description: 'The Theater of the Young Spectator, now the residence of the President' },
      { image: slide11, description: 'Building of the Central Committee of the CPB' },
      { image: slide12, description: 'Institute of Physical Education in Minsk' }],
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
];
