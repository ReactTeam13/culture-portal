import React from 'react';
import './index.css';
import CommonPageItems from '../../components/CommonPageItems';
import SearchPanel from '../../components/SearchPanel';
import data from '../../data/architects';

class CommonPage extends React.Component {
  state = {
    data,
    filteredData: data,
  };


  filterBySearchResult = (searchResult) => {
    if (!searchResult) { this.setState({ filteredData: data }); }

    const result = data.filter((item) => {
      const regularExpression = new RegExp(searchResult.toLowerCase());
      return (
        regularExpression.test(item.ru.name.toLowerCase())
              || regularExpression.test(item.en.name.toLowerCase())
              || regularExpression.test(item.be.name.toLowerCase())
      );
    });
    this.setState({ filteredData: result });
  };

  render() {
    const { filteredData } = this.state;
    return (
      <div>
        <SearchPanel
          setSearchResult={this.filterBySearchResult}
        />
        <CommonPageItems
          data={filteredData}
        />
      </div>
    );
  }
}

export default CommonPage;
