const path = require('path');

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
