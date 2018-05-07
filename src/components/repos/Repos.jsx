import React from 'react';
import shortid from 'shortid';

import RepoCard from './repo-card/RepoCard';

import './repos.css';

const Repos = ({ repos }) => (
  <div className="main-content">
    <h2 className="content-heading">Projects</h2>

    <div className="content-grid">
      {repos.map((repo) => <RepoCard repo={repo} key={shortid.generate()} />)}
    </div>
  </div>
);

export default Repos;
