import filterFunc from './filterFunc';

const orderFunc = (planets, name, numericValues, columnSort, sort) => {
  return ((columnSort === 'Name') &&
    filterFunc(planets, name, numericValues).sort((a, b) => (
      sort === 'ASC' ? a.name - b.name : b.name - a.name
    )))
    ||
    filterFunc(planets, name, numericValues).sort((a, b) => (
      sort === 'ASC' ? a[columnSort] - b[columnSort] : b[columnSort] - a[columnSort]
    ));
};

export default orderFunc;
