import React from 'react';
import './index.css';
import CommonPageItems from '../../components/CommonPageItems';
import SearchPanel from '../../components/SearchPanel';

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
