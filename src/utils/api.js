import axios from 'axios';

/**
 * Get all public Github repos
 * @returns {AxiosPromise}
 */
export function getRepositories() {
  return axios.get(
    'https://api.github.com/users/KleoPetroff/repos?&per_page=100'
  );
}

export function getUserInfo() {
  return axios.get('https://api.github.com/users/KleoPetroff');
}
