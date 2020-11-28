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
