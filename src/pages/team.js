import React from 'react';

import Layout from '../components/Layout';
import TeamPage from '../containers/TeamPage';

const lang = 'ru';

const Index = () => (
  <Layout>
    <TeamPage lang={lang} />
  </Layout>
);

export default Index;
