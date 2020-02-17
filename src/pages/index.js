import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../containers/MainPage';
import CommonPage from '../containers/CommonPage';
import PersonalPage from '../containers/PersonalPage';
import Footer from '../components/Footer';
import './index.css';

export default class App extends Component {
  state={
    person: 0,
    term: '',
  };

  onButtonClick = (event) => {
    this.setState({
      person: event.target.id,
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            path="/"
            render={(props) => (
              <MainPage
                onButtonClick={this.onButtonClick}
              />
            )}
            exact
          />
          <Route
            path="/commonpage"
            render={(props) => (
              <CommonPage
                onButtonClick={this.onButtonClick}
                onSearchChange={this.onSearchChange}
                term={this.state.term}
              />
            )}
            exact
          />
          <Route
            path="/personalpage"
            render={(props) => <PersonalPage person={this.state.person} />}
            exact
          />
          <Footer />
        </div>
      </Router>
    );
  }
}
