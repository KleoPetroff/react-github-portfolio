function ascendingOrder(elementA, elementB) {
  if (elementA > elementB) return 1;
  if (elementA < elementB) return -1;
  return 0;
}

function descendingOrder(elementA, elementB) {
  if (elementA < elementB) return 1;
  if (elementA > elementB) return -1;
  return 0;
}

export function sort(repos, sortBy, order) {
  return repos.sort((a, b) => {
    if (order === 'asc') return ascendingOrder(a[sortBy], b[sortBy]);
    if (order === 'desc') return descendingOrder(a[sortBy], b[sortBy]);
    return 0;
  });
}

