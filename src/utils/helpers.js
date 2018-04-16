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

/**
 * Generate a class name based on the language passed.
 * @param repo - the repository object
 * @returns {string} - Returns "react" if the name param has
 * react in it, else returns one of the following:
 * - the language name if not empty
 * - empty string if null
 */
export function generateClass(repo) {
  const { name, language } = repo;

  if (name.toLowerCase().startsWith('react')) {
    return 'react';
  }

  return language ? language.toLowerCase() : '';
}

export function setRepoLanguage(repo) {
  let formatted = repo.language;

  if (repo.name.toLowerCase().startsWith('react')) {
    formatted = 'React';
  }


  return formatted ? formatted : 'General';
}