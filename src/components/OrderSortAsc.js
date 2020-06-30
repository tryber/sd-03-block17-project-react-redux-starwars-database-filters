import FilterFunctions from './FilterFunctions';

const OrderSortAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    return FilterFunctions(planets, name, numericValues).sort((a, b) => a.name - b.name);
  }
  return FilterFunctions(planets, name, numericValues).sort((a, b) => a[columnSort] - b[columnSort]);
};

export default OrderSortAsc;
