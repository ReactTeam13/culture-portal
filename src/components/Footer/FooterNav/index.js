import React from 'react';
import './index.css';
import { Link } from 'gatsby';


function FooterNav({ links }) {
  return (
    <ul className="pb-4 pt-4 text-light">
      <li className="mt-3 mb-3">
        <Link to="/team" className="footerLink">
          {links.linkTeam}
        </Link>
      </li>
      <li className="mt-3 mb-3">
        <Link to="/worklog" className="footerLink">
          {links.linkWorklog}
        </Link>
      </li>
      <li className="mt-3 mb-3">
        <Link to="/styleGuide" className="footerLink">
          {links.linkStorybook}
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
