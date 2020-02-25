import React from 'react';

import './index.css';

function WorklogTab({ data }) {
  return (
    <div classNmae="">
      <table classNmae="table">
        {data.map((row, i) => (
          <tr key={i}>
            {
                row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))
            }
          </tr>
        ))}
      </table>
    </div>
  );
}

export default WorklogTab;
