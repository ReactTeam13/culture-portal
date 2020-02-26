import React from 'react';

import './index.css';

function WorklogTab({ data }) {
  return (
    <div>
      {
      data.map((person, c) => (
        <div key={c} className="container py-3">
          <div className="p-3">
            <p className="ohra text-center m-2">{person.name}</p>
            <table className="table table-sm">
              {person.data.map((row, i) => (
                <tr key={i} className="row">
                  <td className="col-2">{row[0]}</td>
                  <td className="col-10">{row[1]}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default WorklogTab;
