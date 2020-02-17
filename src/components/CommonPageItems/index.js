import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import Description from '../Description';
import data from '../../data/people';

function CommonPageItems(props) {
  return (
    data.filter((item) => item.name.indexOf(props.term) > -1)
      .map((item, index) => (
        <div
          className="common-page"
          key={index}
        >
          <Avatar data={item} />
          <div className="description-container">
            <Description data={item} />
            <Link
              to="/personalpage"
              className="read-more-button"
              id={index}
              onClick={props.onButtonClick}
            >
              Узнать больше
            </Link>
          </div>
        </div>
      ))
  );
}

export default CommonPageItems;
