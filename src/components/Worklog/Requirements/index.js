import React from 'react';
import requirements from '../../../data/requirements';
import './index.css';
import Checkbox from '../../Checkbox/index';
import transl from './localTranslation';

function Requirements({ lang }) {
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
          {`${transl[lang].calculations} : `}
          <small>{calculations.slice(0, -2)}</small>
        </p>
        <p className="m-2 font-weight-bold">{`${transl[lang].total} : ${total} ${transl[lang].from} ${max}`}</p>
      </div>
    </div>
  );
}

export default Requirements;
