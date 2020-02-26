import React from 'react';
import requirements from '../../../data/requirements';
import './index.css';
import Checkbox from '../../Checkbox/index';

const lang = 'ru';

function Requirements() {
  let totoal = 0;
  let calculations = '';
  let max = 0;

  const count = (score, isReached) => {
    if (isReached) {
      calculations += `${score} + `;
      totoal += score;
    }
    max += score;
  };

  return (
    <div className="p-4">
      <div>
        {
        requirements.map((requirement, i) => {
          count(requirement.score, requirement.check);
          return (
            <div key={i} className="p-1">
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
          Mark calculations:
          <small>{calculations.slice(0, -2)}</small>
        </p>
        <p className="m-2 font-weight-bold">{`TOTAL: ${totoal} from ${max}`}</p>
      </div>
    </div>
  );
}

export default Requirements;
