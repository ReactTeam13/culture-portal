import React, { useState } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import ArchitectBlockChessOrder from '../../components/ArchitectBlockChessOrder';
import SearchPanel from '../../components/SearchPanel';

const CommonPage = ({ data }) => {
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
      <div className="container">
        <ArchitectBlockChessOrder
          data={filteredData}
        />
      </div>
    </div>
  );
};

export default CommonPage;
