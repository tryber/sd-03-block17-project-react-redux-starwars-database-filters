const filterFunc = (planets, name, numericValues) => (
  numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
      (acc, { column, comparison, value }) => acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(name) && parseFloat(planet[column]) > parseFloat(value)
            );
          case 'menor que':
            return (
              planet.name.includes(name) && parseFloat(planet[column]) < parseFloat(value)
            );
          case 'igual a':
            return (
              planet.name.includes(name) && parseFloat(planet[column]) === parseFloat(value)
            );
          default:
            return planet.name.includes(name);
        }
      }),
      planets,
    )
);

const orderName = (array) => array
  .sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

export const orderFuncAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = filterFunc(planets, name, numericValues);
    return orderName(filter);
  }
  return filterFunc(planets, name, numericValues).sort(
    (a, b) => a[columnSort] - b[columnSort],
  );
};

export const orderFuncDesc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = filterFunc(planets, name, numericValues);
    return orderName(filter);
  }
  return filterFunc(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default filterFunc;
