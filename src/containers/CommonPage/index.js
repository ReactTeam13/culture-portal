import React, { useState } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import CommonPageItems from '../../components/CommonPageItems';
import SearchPanel from '../../components/SearchPanel';
import data from '../../data/architects';

const CommonPage = () => {
  const [filteredData, setFilteredData] = useState(data);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  const filterBySearchResult = (searchResult) => {
    if (!searchResult) {
      setFilteredData(data);
      return;
    }

    const result = data.filter((item) => {
      const regularExpression = new RegExp(searchResult.toLowerCase());
      return (
        regularExpression.test(item[currentLanguage].name.toLowerCase())
        || regularExpression.test(item[currentLanguage].birthPlace.toLowerCase())
      );
    });
    setFilteredData(result);
  };

  return (
    <div>
      <SearchPanel
        setSearchResult={filterBySearchResult}
      />
      <CommonPageItems
        data={filteredData}
      />
    </div>
  );
};

export default CommonPage;
