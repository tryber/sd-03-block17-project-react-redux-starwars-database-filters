
function getColumns() {
  const columns = [
    `population`,
    `orbital_period`,
    `diameter`,
    `rotation_period`,
    `surface_water`
  ];
  return (
    <select
      data-testid='column-filter'
      value={this.state.column}
    >
      {columns.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}