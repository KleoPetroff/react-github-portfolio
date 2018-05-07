function ascendingOrder(a, b, sortBy) {
  if (a[sortBy] > b[sortBy]) return 1;
  if (a[sortBy] < b[sortBy]) return -1;

  return a.name.localeCompare(b.name);
}

function descendingOrder(a, b, sortBy) {
  if (a[sortBy] < b[sortBy]) return 1;
  if (a[sortBy] > b[sortBy]) return -1;

  return a.name.localeCompare(b.name);
}

export function sort(repos, sortBy, order) {
  return repos.sort((a, b) => {
    if (order === 'asc') return ascendingOrder(a, b, sortBy);
    if (order === 'desc') return descendingOrder(a, b, sortBy);
    return 0;
  });
}
