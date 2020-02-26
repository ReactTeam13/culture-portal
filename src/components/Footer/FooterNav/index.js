import React from 'react';
import './index.css';
import { Link } from 'gatsby';


function FooterNav({ links }) {
  return (
    <ul className="p-4 pl-5 text-light">
      <li className="m-3">
        <Link to="/team" className="footerLink">
          {links.linkTeam}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/" className="footerLink">
          {links.linkWorklog}
        </Link>
      </li>
      <li className="m-3">
        <Link to="/styleGuide" className="footerLink">
          {links.linkStorybook}
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
