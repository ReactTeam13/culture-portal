import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import Avatar from '../Avatar';
import Description from '../Description';
import data from '../../data/architects';

function CommonPageItems(props) {
  return (
    data.filter((item) => item.ru.name.indexOf(props.term) > -1)
      .map((item, index) => {
        const profile = item.ru;
        const url = item.en.name.split(' ')[0];
        return (
          <div
            className="common-page"
            key={index}
          >
            <Avatar data={profile} />
            <div className="description-container">
              <Description data={profile} />
              <Link
                to={`/architector/${url}`}
                className="read-more-button"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        );
      })
  );
}

export default CommonPageItems;
