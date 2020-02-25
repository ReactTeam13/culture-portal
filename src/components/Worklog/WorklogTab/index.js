import React from 'react';

import './index.css';

function WorklogTab({ data }) {
  return (
    <div>
      {
    data.map((person, c) => (

      <div key={c} className="container py-3">
        <p>{person.name}</p>
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
