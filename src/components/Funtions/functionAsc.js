import functionFilter from './functionFilter';

const orderByName = (array) => (
  array.sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })
);

const functionAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = functionFilter(planets, name, numericValues);
    return orderByName(filter);
  }
  return functionFilter(planets, name, numericValues).sort((a, b) => a[columnSort] - b[columnSort]);
};

export default functionAsc;
