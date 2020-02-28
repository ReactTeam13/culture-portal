import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CommonPage from '../containers/CommonPage';

export const query = graphql`
  query Architect {
    allContentfulArchitect {
      nodes {
        data {
          id
          be {
            avatar
            birthPlace
            occupation
            name
          }
          ru {
            avatar
            birthPlace
            name
            occupation
          }
          en {
            avatar
            birthPlace
            name
            occupation
          }
        }
      }
    }
  }
`;

const Architectors = ({ data: { allContentfulArchitect: { nodes } } }) => {
  const formatedData = nodes.map((item) => item.data).reverse();
  return (
    <Layout>
      <CommonPage data={formatedData} />
    </Layout>
  );
};

export default Architectors;
