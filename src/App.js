import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Repos from "./components/repos";
import Sidebar from './components/sidebar';

import { getRepositories, setRepoLanguage } from './utils/helpers'
import { sort } from './utils/sorting';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };

    this.onSortChange = this.onSortChange.bind(this);
  }

  componentDidMount() {
    getRepositories().then(res => {
      const created = res.data
        .filter(repo => repo.fork === false)
        .map(repo => {
          repo.language = setRepoLanguage(repo);
          return repo;
        })
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

      this.setState({ repos: created });
    })
  }

  onSortChange(sortBy, order) {
    this.setState({repos: sort(this.state.repos,sortBy, order)});
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar onSortChange={this.onSortChange} />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
