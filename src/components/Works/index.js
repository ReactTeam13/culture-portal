import React from 'react';
import './index.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function Works({
  data, title, date, work,
}) {
  return (
    <div className="works pt-5 pb-5 pr-3 pl-3">
      <h2 className="pb-4 container">{title}</h2>
      <List className="list-works container">
        <ListItem button className="listitem-title listitem-container">
          <span className="year">
            {date}
          </span>
          <span className="work">
            {work}
          </span>
        </ListItem>

        {data.listOfWorks.map((item, index) => (
          <ListItem button className="listitem-container" key={index}>
            <span className="year">{item.year}</span>
            <span className="work">{item.work}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Works;
