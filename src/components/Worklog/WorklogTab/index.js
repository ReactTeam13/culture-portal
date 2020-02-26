import React from 'react';

import './index.css';

function WorklogTab({ data }) {
  return (
    <div>
      {
    data.map((person, c) => (

      <div key={c} className="container py-3">
        <div className="col-sm-3">
          <div className="card card-inverse card-warning h-100 text-center pt-2 mb-3">
            <div className="card-block card-title">
              <h6 className="text-dark">{person.name}</h6>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-striped table-responsive-stack">
          <thead className="thead-dark">
            <tr>
              <th>Time Spent</th>
              <th>Feature</th>
            </tr>
          </thead>
          <tbody>
            {person.data.map((row, i) => (
              <tr key={i}>
                {
                row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))
            }
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    ))
  }
    </div>
  );
}

export default WorklogTab;
