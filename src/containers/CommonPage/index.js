import React, { useState } from 'react';
import './index.css';
import CommonPageItems from '../../components/CommonPageItems';
import SearchPanel from '../../components/SearchPanel';

const CommonPage = () => {
  const [term, setTerm] = useState('');

  const onSearchChange = (value) => {
    setTerm(value);
  };

  return (
    <div>
      <SearchPanel onSearchChange={onSearchChange} />
      <CommonPageItems
        term={term}
      />
    </div>
  );
};

export default CommonPage;
