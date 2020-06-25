const functionFilter = (planet, name, numericValues) => (
  numericValues.length === 0 ? planet.filter((planets) => planets.name.includes(name)) :
  numericValues.reduce((aux, { column, comparison, value }) => (
      aux.filter((planets) => {
        switch (comparison) {
          case 'maior que':
            return planets.name.includes(name) && parseFloat(planets[column]) > parseFloat(value);
          case 'menor que':
            return planets.name.includes(name) && parseFloat(planets[column]) < parseFloat(value);
          case 'igual a':
            return planets.name.includes(name) && parseFloat(planets[column]) === parseFloat(value);
          default:
            return planets.name.includes(name);
        }
      })
    ), planet)
);

export default functionFilter;
