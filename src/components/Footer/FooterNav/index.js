import React from 'react';
import './index.css';
import { Link } from 'gatsby';


function FooterNav({ t }) {
  return (
    <ul className="p-4 pl-5 text-light">
      <li className="m-3">
        <Link to="/team" className="footerLink">
          {t.footer.linkTeam}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/worklog" className="footerLink">
          {t.footer.linkWorklog}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/" className="footerLink">
          {t.footer.linkStorybook}
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
