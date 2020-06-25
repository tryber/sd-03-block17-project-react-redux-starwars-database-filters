import functionFilter from './functionFilter';

const orderByName = (array) => (
  array.sort(function (a, b) {
    if (a.name < b.name) { return 1; }
    if (a.name > b.name) { return -1; }
    return 0;
  })
);

const functionDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = functionFilter(planets, name, numericValues);
    return orderByName(filter);
  }
  return functionFilter(planets, name, numericValues).sort((a, b) => b[columnSort] - a[columnSort]);
};

export default functionDesc;
