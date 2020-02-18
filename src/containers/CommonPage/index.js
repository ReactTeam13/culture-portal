import React from 'react';
import './index.css';
import CommonPageItems from '../../components/CommonPageItems';
import SearchPanel from '../../components/SearchPanel';

function CommonPage({ onSearchChange, onButtonClick, term }) {
  return (
    <div>
      <SearchPanel onSearchChange={onSearchChange} />
      <CommonPageItems
        onButtonClick={onButtonClick}
        term={term}
      />
    </div>
  );
}

export default CommonPage;
