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

export function setRepoLanguage(repo) {
  let { language, name } = repo;

  if (name.toLowerCase().startsWith('react')) {
    language = 'react';
  }

  repo.language = language ? language.toLowerCase() : '';

  return repo;
}
