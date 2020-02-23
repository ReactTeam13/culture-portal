import React from 'react';

import Layout from '../components/Layout';
import WorklogPage from '../containers/WorklogPage';

const lang = 'ru';

const Index = () => (
  <Layout>
    <WorklogPage lang={lang} />
  </Layout>
);

export default Index;
