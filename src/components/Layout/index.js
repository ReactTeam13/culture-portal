import React from 'react';
import Helmet from 'react-helmet';
import '../../configs/i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../static/styles/reset.css';
import '../../../static/fonts/fonts.css';
import './index.css';


import Header from '../Header';
import Footer from '../Footer';


const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Culture portal. Architects of Belarus.</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
    </Helmet>
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
