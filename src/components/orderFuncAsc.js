import filterFunc from './filterFunc';

const orderFuncAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    return filterFunc(planets, name, numericValues)
      .sort((a, b) => a.name - b.name);
  }
  return filterFunc(planets, name, numericValues).sort((a, b) => a[columnSort] - b[columnSort]);
};

export default orderFuncAsc;

/* return ((columnSort === 'Name') &&
    filterFunc(planets, name, numericValues).sort((a, b) => (
      sort === 'ASC' ? a.name - b.name : b.name - a.name
    )))
    ||
    filterFunc(planets, name, numericValues).sort((a, b) => (
      sort === 'ASC' ? a[columnSort] - b[columnSort] : b[columnSort] - a[columnSort]
    )); */
