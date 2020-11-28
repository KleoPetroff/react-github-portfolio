import React from 'react';
import shortid from 'shortid';

import RepoCard from './repo-card/RepoCard';

import './repos.css';

const Repos = ({ repos }) => (
  <div className="main-content">
    {repos && (
      <div className="content-grid">
        {repos.map((repo) => (
          <RepoCard repo={repo} key={shortid.generate()} />
        ))}
      </div>
    )}
  </div>
);

export default Repos;
