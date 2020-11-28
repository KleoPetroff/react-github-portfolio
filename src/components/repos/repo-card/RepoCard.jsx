import React from 'react';

import { truncate } from '../../../utils/helpers';

import './repo-card.css';
import './repo-card-categores.css';

const RepoCard = ({ repo }) => {
  const truncatedDescription = truncate(repo.description, 95);

  return (
    <a
      className="repo"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={'repo-image ' + repo.language} />
      <div className="repo-info">
        <div className="repo-title">{repo.name}</div>
        <div className="repo-description">{truncatedDescription}</div>
        <div className="repo-stars">{repo.stargazers_count} stars</div>
        <div className="repo-forks">{repo.forks} forks</div>
      </div>
    </a>
  );
};

export default RepoCard;
