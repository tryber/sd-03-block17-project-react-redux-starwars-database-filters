import filterFunc from './filterFunc';

const orderFuncDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    return filterFunc(planets, name, numericValues)
      .sort((a, b) => b.name - a.name);
  }
  return filterFunc(planets, name, numericValues).sort((a, b) => b[columnSort] - a[columnSort]);
};

export default orderFuncDesc;
