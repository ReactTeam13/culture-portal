import React from 'react';
import { useTranslation } from 'react-i18next';

import requirements from '../../../data/requirements';
import Checkbox from '../../Checkbox/index';
import './index.css';

function Requirements() {
  const { t, i18n: { language: lang } } = useTranslation('requirements');
  let total = 0;
  let calculations = '';
  let max = 0;

  const count = (score, isReached) => {
    if (isReached) {
      calculations += `${score} + `;
      total += score;
    }
    max += score;
  };

  return (
    <div className="pr-5 pl-5">
      <div>
        {
        requirements.map((requirement, i) => {
          count(requirement.score, requirement.check);
          return (
            <div key={i} className="p-0">
              <Checkbox isChecked={requirement.check} />
              <span className="font-weight-bold m-2">{requirement.score}</span>
              <span>{requirement.data[lang]}</span>
            </div>
          );
        })
        }
      </div>
      <div>
        <p className="m-2 mb-3 mt-5">
          {`${t('calculations')} : `}
          <small>{calculations.slice(0, -2)}</small>
        </p>
        <p className="m-2 font-weight-bold">{t('total', { total, max })}</p>
      </div>
    </div>
  );
}

export default Requirements;
