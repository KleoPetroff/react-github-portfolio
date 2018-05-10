import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Repos from './components/repos/Repos';
import Sidebar from './components/sidebar/Sidebar';

import { getRepositories, setRepoLanguage } from './utils/helpers';
import { sort } from './utils/sorting';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    repos: []
  };

  async componentDidMount() {
    let repos = [];

    try {
      repos = await getRepositories();

      repos = repos.data
        .filter((repo) => repo.fork === false)
        .map((repo) => setRepoLanguage(repo));

      // Store the repositories in localStorage after
      // every successful request and load them only
      // when Github's request limit is exceeded
      // which is 60 requests per hour
      localStorage.setItem('repos', JSON.stringify(repos));
    } catch (e) {
      repos = JSON.parse(localStorage.getItem('repos')) | [];
    } finally {
      this.setState({ repos: sort(repos, 'stargazers_count', 'desc') });
    }
  }

  onSortChange = (sortBy, order) => {
    const repos = [...this.state.repos];
    this.setState({ repos: sort(repos, sortBy, order) });
  };

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
