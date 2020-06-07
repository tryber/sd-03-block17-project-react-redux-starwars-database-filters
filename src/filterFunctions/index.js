
export const nameFilter = (data, text) => data
  .filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()));

const matchComparison = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    default:
      return [];
  }
};

export const filterDataByNumericValue = (filters, data) => filters
  .reduce((acc, { column, comparison, value }) => acc
    .filter((element) => matchComparison(column, comparison, value, element)),
  data);
