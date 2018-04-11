import axios from 'axios';

import config from './config';

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
 * @param name - the name of the repo
 * @param language - the programming language
 * @returns {string} - Returns "react" if the name param has
 * react in it, else returns one of the following:
 * - the language name if not empty
 * - empty string if null
 */
export function generateClass(name, language) {
  if (name.toLowerCase().indexOf('react') >= 0) {
    return 'react';
  }

  return language ? language.toLowerCase() : ''
}