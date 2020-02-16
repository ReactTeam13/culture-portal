import React from 'react';
import './CommonPage.css';
import CommonPageItems from '../../components/CommonPageItems/CommonPageItems';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

function CommonPage(props) {  
  return (
    <div>
      <SearchPanel onSearchChange={props.onSearchChange}/>
      <CommonPageItems 
        onButtonClick={props.onButtonClick}
        term={props.term}/>
    </div>
  )
}

export default CommonPage;