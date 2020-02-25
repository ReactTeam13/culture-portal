import React from 'react';
import './index.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function Works({ data }) {
  return (
    <div className="works">
      <h2>Список работ</h2>
      <List className="list-works">
        <ListItem button className="listitem-title listitem-container">
          <span className="year">
            Года
          </span>
          <span className="work">
            Проекты
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
