import React from 'react';

import './repo-card.css'

const RepoCard = () => (
  <div className='repo'>
    <div className='repo-image' />
    <div className='repo-info'>
      <div className='repo-title'>react-webpack-boilerplate</div>
      <div className="repo-description">Minimalistic ES6 React boilerplate with Hot Reloading using Webpack 3</div>
      <div className="repo-stars">243 stars</div>
      <a className="repo-link" href='https://github.com/KleoPetroff/react-webpack-boilerplate' target='_blank'>Github Link</a>
    </div>
  </div>
);

export default RepoCard;