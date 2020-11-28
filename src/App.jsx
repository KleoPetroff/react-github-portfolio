import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/header/Header';
import Repos from './components/repos/Repos';
import Sidebar from './components/sidebar/Sidebar';

import { setRepoDescription, setRepoLanguage } from './utils/helpers';
import { getRepositories } from './utils/api';
import { sort } from './utils/sorting';

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let fetchedRepos;

      try {
        fetchedRepos = await getRepositories();

        fetchedRepos = fetchedRepos.data
          .filter((repo) => repo.fork === false)
          .map(setRepoLanguage)
          .map(setRepoDescription);

        // Store the repositories in localStorage after
        // every successful request and load them only
        // when Github's request limit is exceeded
        // which is 60 requests per hour
        localStorage.setItem('repos', JSON.stringify(fetchedRepos));
      } catch {
        fetchedRepos = JSON.parse(localStorage.getItem('repos')) || [];
      } finally {
        setRepos(sort(fetchedRepos, 'stargazers_count', 'desc'));
      }
    };

    fetchRepos();
  }, []);

  const onSortChange = (sortBy, order) => {
    setRepos(sort([...repos], sortBy, order));
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar onSortChange={onSortChange} />
      <Repos repos={repos} />
    </div>
  );
};

export default App;
