import FilterFunctions from './FilterFunctions';

const OrderSortDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    return FilterFunctions(planets, name, numericValues).sort((a, b) => b.name - a.name);
  }
  return FilterFunctions(planets, name, numericValues).sort((a, b) => b[columnSort] - a[columnSort]);
};

export default OrderSortDesc;
