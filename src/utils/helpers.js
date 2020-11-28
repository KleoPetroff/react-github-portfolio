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

export function setRepoDescription(repo) {
  const description = repo.description || '';
  return {
    ...repo,
    description
  };
}

export function truncate(text = '', maxSize) {
  if (text.length <= maxSize) return text;

  const truncatedText = text.substring(0, maxSize);
  return truncatedText + '...';
}
