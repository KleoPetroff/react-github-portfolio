import axios from 'axios';

/**
 * Get all public Github repos
 * @returns {AxiosPromise}
 */
export function getRepositories() {
  return axios.get('https://api.github.com/users/KleoPetroff/repos?&per_page=100');
}

export function setRepoLanguage(repo) {
  let formatted = repo.language;

  if (repo.name.toLowerCase().startsWith('react')) {
    formatted = 'react';
  }

  return formatted ? formatted.toLowerCase() : '';
}