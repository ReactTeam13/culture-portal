import React from 'react';

import './index.css';

function WorklogTab({ data }) {
  return (
    <div>
      {
      data.map((person, c) => (
        <div key={c} className="container">
          <div className="pr-4 pl-4 pt-3">
            <h4 className="ohra text-center m-2">{person.name}</h4>
            <table className="table table-sm">
              <tbody>
                {person.data.map((row, i) => (
                  <tr key={i} className="row">
                    <td className="col-2">{row[0]}</td>
                    <td className="col-10">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default WorklogTab;
