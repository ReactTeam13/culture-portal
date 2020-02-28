import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import MainPage from '../containers/MainPage';

export const query = graphql`
  query Query {
    allContentfulArchitect {
      nodes {
        data {
          id
          be {
            avatar
            occupation
            name
          }
          ru {
            avatar
            name
            occupation
          }
          en {
            avatar
            name
            occupation
          }
        }
      }
    }
  }
`;

const Index = ({ data: { allContentfulArchitect: { nodes } } }) => {
  const formatedData = nodes.map((item) => item.data).reverse();
  return (
    <Layout>
      <MainPage data={formatedData} />
    </Layout>
  );
};

export default Index;
