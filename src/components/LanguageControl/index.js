import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';

const LanguageControl = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { value: 'ru', label: 'Ру' },
    { value: 'en', label: 'En' },
    { value: 'be', label: 'Бе' },
  ];

  const handleChange = (event) => {
    const { value } = event.target;
    i18n.changeLanguage(value);
  };

  const items = languages.map((language) => {
    const { value, label } = language;
    return (
      <p key={value} className="language-control__item">
        <input
          className="language-control__input"
          id={value}
          type="radio"
          name="language"
          value={value}
          checked={value === currentLanguage}
          onChange={handleChange}
        />
        <label
          className="language-control__label"
          htmlFor={value}
        >
          {label}
        </label>
      </p>
    );
  });

  return (
    <div className="language-control">
      {items}
    </div>
  );
};

export default LanguageControl;
