import React, { Component } from 'react';
import './index.css';
import Button from '../Button';

export default class SearchPanel extends Component {
  state = {
    searchValue: null,
  };

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleReturnSearchResult = (e) => {
    if (e.keyCode && e.keyCode !== 13 && e.target.value) return;
    const { setSearchResult } = this.props;
    const { searchValue } = this.state;
    setSearchResult(searchValue);
  };

  render() {
    return (
      <div className="search-panel-wrapper d-flex">
        <div className="search-panel my-auto mx-4 mx-md-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control pl-5 search-panel--search-field"
              placeholder="Enter the name..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={this.onSearchChange}
              onKeyUp={this.handleReturnSearchResult}
            />
            <div className="input-group-append">
              <Button
                type="button"
                content="Найти"
                id="button-addon2"
                btnAdditionalClasses="btn-xxl btn-yellow"
                onClickCallback={this.handleReturnSearchResult}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
