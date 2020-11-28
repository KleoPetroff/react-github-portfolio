import React from 'react';
import shortid from 'shortid';

import RepoCard from './repo-card/RepoCard';

import './repos.css';

const Repos = ({ repos }) => (
  <div className="main-content">
    {repos && (
      <>
        {repos.map((repo) => (
          <RepoCard repo={repo} key={shortid.generate()} />
        ))}
      </>
    )}
  </div>
);

export default Repos;
