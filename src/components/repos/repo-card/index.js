import React from 'react';
import { generateClass } from '../../../helpers';

import './repo-card.css'

const RepoCard = ({repo}) => {
  const languageClass = generateClass(repo.name, repo.language);

  return (
    <div className='repo'>
      <div className={'repo-image ' + languageClass} />
      <div className='repo-info'>
        <div className='repo-title'>{repo.name}</div>
        <div className="repo-description">{repo.description}</div>
        <div className="repo-stars">{repo.stargazers_count} stars</div>
        <a className="repo-link" href={repo.html_url} target='_blank' rel='noopener noreferrer'>Github Link</a>
      </div>
    </div>
  )

};

export default RepoCard;