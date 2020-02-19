import React from 'react';

import Layout from '../components/Layout';
import PersonalPage from '../containers/PersonalPage';

const Architectors = ({ pageContext }) => {
  const profile = pageContext.architector.ru;
  return (
    <Layout>
      <PersonalPage profile={profile} />
    </Layout>
  );
};

export default Architectors;
