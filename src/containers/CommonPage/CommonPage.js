import React from 'react';
import './CommonPage.css';
import CommonPageItems from '../../components/CommonPageItems/CommonPageItems';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

function CommonPage(props) {  
  return (
    <div>
      <SearchPanel/>
      <CommonPageItems onButtonClick={props.onButtonClick}/>
    </div>
  )
}

export default CommonPage;