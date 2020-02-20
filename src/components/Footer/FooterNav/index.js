import React from 'react';
import './index.css';
import { Link } from 'gatsby';


function FooterNav({ t }) {
  return (
    <ul className="p-4 pl-5 text-light">
      <li className="m-3">
        <Link to="/team">
          {t.footer.linkTeam}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/">
          {t.footer.linkWorklog}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/">
          {t.footer.linkStorybook}
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
