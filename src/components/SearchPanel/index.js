import React, { useState } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import Button from '../Button';

const SearchPanel = ({ setSearchResult }) => {
  const [searchValue, setSearchValue] = useState(null);
  const { t } = useTranslation('search');

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleReturnSearchResult = (e) => {
    if (e.keyCode && e.keyCode !== 13 && e.target.value) return;
    setSearchResult(searchValue);
  };

  return (
    <div className="search-panel-wrapper d-flex">
      <div className="search-panel my-auto mx-4 mx-md-auto">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control pl-5 search-panel--search-field"
            placeholder={t('title')}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={onSearchChange}
            onKeyUp={handleReturnSearchResult}
          />
          <div className="input-group-append">
            <Button
              type="button"
              content={t('button')}
              id="button-addon2"
              btnAdditionalClasses="btn-xxl btn-primary"
              onClickCallback={handleReturnSearchResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
