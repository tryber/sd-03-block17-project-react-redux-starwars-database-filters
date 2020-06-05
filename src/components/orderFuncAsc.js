import filterFunc from './filterFunc';

const orderFuncAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    return filterFunc(planets, name, numericValues)
      .sort((a, b) => a.name - b.name);
  }
  return filterFunc(planets, name, numericValues).sort((a, b) => a[columnSort] - b[columnSort]);
};

export default orderFuncAsc;
