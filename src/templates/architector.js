import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import PersonalPage from '../containers/PersonalPage';

const Architectors = ({ pageContext }) => {
  const { i18n: { language } } = useTranslation();
  const profile = pageContext.architector[language];
  return (
    <Layout>
      <PersonalPage profile={profile} />
    </Layout>
  );
};

export default Architectors;
