import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import Avatar from '../Avatar';
import DescriptionShort from '../DescriptionShort';

function CommonPageItems({ data }) {
  const { t, i18n: { language } } = useTranslation('mainPage');

  return (
    data.map((item, index) => {
      const profile = item[language];
      const url = item.en.name.split(' ')[0];
      return (
        <div key={item.id} className="row">
          <div className={`col-md-6 p-5 text-center ${!(index % 2) ? 'order-md-1' : 'order-md-2'}`}>
            <Avatar data={profile} />
          </div>
          <div className={`col-md-6 p-5 background-dark ${index % 2 ? 'order-md-1' : 'order-md-2'}`}>
            <DescriptionShort data={profile} />
            <Link
              to={`/architector/${url}`}
              className="btn btn-xxl btn-primary"
            >
              {t('link')}
            </Link>
          </div>
        </div>
      );
    })
  );
}

export default CommonPageItems;
