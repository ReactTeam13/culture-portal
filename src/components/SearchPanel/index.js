import React, { Component } from 'react';
import './index.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = (event) => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: event.target.value,
    });
    onSearchChange(event.target.value);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-container">
        <form className="search-panel">
          <label>
            Я ищу архитектора
            <input
              type="text"
              className="form-control search-input"
              placeholder="search"
              value={term}
              onChange={this.onSearchChange}
            />
          </label>
          <button className="search-button" type="submit">Найти</button>
        </form>
      </div>
    );
  }
}
