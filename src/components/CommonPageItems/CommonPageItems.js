import React from 'react';
import './CommonPageItems.css';
import Avatar from '../Avatar/Avatar';
import Description from '../Description/Description';
import data from '../../data/people';
import { Link } from 'react-router-dom';

function CommonPageItems(props) {  
  return (
    data.map((item, index) => {
      return (
        <div className="common-page"
             key={index}>          
          <Avatar data={item}/>
          <div className="description-container">
            <Description data={item}/>
            <Link to="/personalpage"  
                  className="read-more-button"
                  id={index}
                  onClick={props.onButtonClick}>
                  Узнать больше
            </Link>        
          </div>
        </div>
      );
    })
  )
}

export default CommonPageItems;