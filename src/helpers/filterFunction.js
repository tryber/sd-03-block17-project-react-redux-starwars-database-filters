const filterPlanets = ({ nameFilter, numericFilters, data }) => {
  const filterbyName = data.filter((planet) => (planet.name.toLowerCase()).includes(nameFilter));
  if (numericFilters.length !== 0) {
    return numericFilters.reduce((newList, { column, comparison, value }) =>
      newList.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'igual a') return Number(planet[column]) === Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        return planet;
      })
      , filterbyName);
  }
  return filterbyName;
}

export default filterPlanets;
