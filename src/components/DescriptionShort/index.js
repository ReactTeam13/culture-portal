import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';


function DescriptionShort({
  data: {
    name, occupation, birthDate, deathDate, birthPlace,
  }, children, isDescriptionFull,
}) {
  const { t } = useTranslation('description');
  return (
    <div className="text-left">
      <h1 className="name-short mb-5 mt-md-5">{ name }</h1>
      <p className="occupation-short mb-5">{ occupation }</p>
      {isDescriptionFull
        ? (
          <>
            <p className="mb-5">
              <strong>
                {t('authorYearsOfLife')}
              </strong>
              <br />
              {`${birthDate} - ${deathDate}`}
            </p>
            <p className="mb-5">
              <strong>
                {t('authorBirthPlace')}
              </strong>
              <br />
              { birthPlace }
            </p>
          </>
        ) : null}
      {children}
    </div>
  );
}

export default DescriptionShort;
