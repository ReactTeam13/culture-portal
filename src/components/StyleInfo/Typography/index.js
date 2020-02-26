import React from 'react';
import './index.css';
import Color from '../Colors/Color';

function TypographyContainer() {
  const style = {
    fontSize: '18px',
  };
  return (
    <div className="text-container">
      <div className="pb-5 pt-5 container text-container">
        <h3 className="h3 ohra text-center pb-4">Typography</h3>
        <div className="fonts">
          <table className="table">
            <thead className="h4">
              <tr>
                <th>Style Name</th>
                <th>Lato, sans-serif</th>
                <th>Colors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row " className="h3 ohra">Headline large</th>
                <td>28px, normal</td>
                <td>
                  <Color color="#C3A871" size="20px" />
                </td>
              </tr>
              <tr>
                <th scope="row" className="h4">Headline small</th>
                <td>24px, normal</td>
                <td>
                  <Color color="#41414E" size="20px" />
                </td>
              </tr>
              <tr>
                <th scope="row" className="h5">Button text</th>
                <td>20px, normal</td>
                <td>
                  <Color color="#41414E" size="20px" />
                </td>
              </tr>
              <tr>
                <th scope="row" style={style}>Header, footer text</th>
                <td>18px, normal</td>
                <td>
                  <Color color="#41414E" size="20px" />
                </td>
              </tr>
              <tr>
                <th scope="row">Body text</th>
                <td>14px, normal</td>
                <td>
                  <Color color="#41414E" size="20px" />
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TypographyContainer;
