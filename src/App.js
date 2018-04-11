import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Repos from "./components/repos";

import { getGithubRepos } from './helpers'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    getGithubRepos().then(res => {
      const created = res.data
        .filter(repo => repo.fork === false)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

      this.setState({ repos: created });
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
