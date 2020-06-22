
const filtraData = (planets, name, numericValues) => (
  numericValues.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : numericValues.reduce(
      (acc, { column, comparison, value }) => acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            console.log('apenas no  maior que');
            return (
              planet.name.includes(name)
                    && parseFloat(planet[column]) > parseFloat(value)
            );
          case 'menor que':
            return (
              planet.name.includes(name)
                    && parseFloat(planet[column]) < parseFloat(value)
            );
          case 'igual a':
            return (
              planet.name.includes(name)
                    && parseFloat(planet[column]) === parseFloat(value)
            );
          default:
            return planet;
        }
      }),
      planets,
    )
);
const compareAsc = (a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
};

const compareDesc = (a, b) => {
    if (a.name < b.name) return 1;
    if (b.name < a.name) return -1;
    return 0;
  };
const OrderColumn = (planets, name, numericValues, order) => {
  const results = filtraData(planets, name, numericValues, order);
  if (order.sort === 'DESC') {
    results.sort(compareDesc);
    return results;
  }
  console.log('ascendente');
  results.sort(compareAsc);
  return results;
};

export default OrderColumn;
