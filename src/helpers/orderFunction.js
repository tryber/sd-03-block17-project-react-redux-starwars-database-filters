const integersColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const orderIntegerAsc = (data, column) => data.sort((a, b) => {
  if (a[column] === 'unknown') return -1;
  if (b[column] === 'unknown') return 1;
  return Number(a[column]) - Number(b[column]);
});
const orderStringAsc = (data, column) => data.sort((a, b) => {
  if (a[column] < b[column]) return -1;
  if (a[column] > b[column]) return 1;
  return 0;
});

const orderFunction = (data, column, order) => {
  const lowerCaseColumn = column.toLowerCase();
  const sortedData = integersColumns.includes(lowerCaseColumn)
    ? orderIntegerAsc(data, lowerCaseColumn)
    : orderStringAsc(data, lowerCaseColumn);
  if (order === 'DESC') return sortedData.reverse();
  return sortedData;
};

export default orderFunction;
