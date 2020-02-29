import React from 'react';
import './index.css';
import StyleInfo from '../../components/StyleInfo';
import Title from '../../components/Worklog/Title/index';

function StylePage() {
  const link = (
    <a
      className="h font-weight-bold"
      href="https://eager-spence-9bfadc.netlify.com/?path=/story/*"
    >
      Go to StoryBook &gt;&gt;
    </a>
  );
  return (
    <div>
      <StyleInfo />
      <div className="p-5">
        <Title text={link} />
      </div>
    </div>
  );
}

export default StylePage;
