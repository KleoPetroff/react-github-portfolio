import axios from 'axios';

import config from '../config';

/**
 * Get all public Github repos
 * @returns {AxiosPromise}
 */
export function getGithubRepos() {
  return axios.get('https://api.github.com/user/repos?' +
    'access_token=' + config.API_TOKEN +
    '&per_page=' + config.per_page +
    '&affiliation=' + config.affiliation +
    '&visibility=' + config.visibility);
}

export function setRepoLanguage(repo) {
  let formatted = repo.language;

  if (repo.name.toLowerCase().startsWith('react')) {
    formatted = 'react';
  }

  return formatted ? formatted.toLowerCase() : '';
}