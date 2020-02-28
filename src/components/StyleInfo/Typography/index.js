import React from 'react';
import './index.css';

function TypographyContainer() {
  const style = {
    fontSize: '18px',
  };
  return (
    <div>
      <div className="pb-5 pt-5 container">
        <h2 className="h2 ohra text-center pb-4">Typography</h2>
        <div className="fonts">
          <table className="table">
            <thead>
              <tr>
                <th>Style Name</th>
                <th>Font</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row " className="headline h2 ohra">Headline large</th>
                <td>Playfair Display, serif, 32px, bold</td>
              </tr>
              <tr>
                <th scope="row " className="headline-small h2 ">Headline small</th>
                <td>Playfair Display, serif, 24px, normal</td>
              </tr>
              <tr>
                <th scope="row" className="h5">Button text</th>
                <td>Montserrat, 20px, normal</td>
              </tr>
              <tr>
                <th scope="row" style={style} className="header-style">Navigation</th>
                <td>Montserrat, 18px, normal</td>
              </tr>
              <tr>
                <th scope="row" style={style} className="footer-fontstyle">Footer, button text</th>
                <td>Montserrat, 16px, normal</td>
              </tr>
              <tr>
                <th scope="row">Body text</th>
                <td>Montserrat, 14px, normal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TypographyContainer;
