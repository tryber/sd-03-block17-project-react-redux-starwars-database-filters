import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const takeTitles = (planet) => (
  Object.keys(planet)
  .filter((key) => key !== 'residents')
);

const renderBody = (planets, filterName) => (
  <tbody>
    {
      planets
        .filter((planet) => planet.name.includes(filterName))
        .map((planet) =>
        <TableRow key={planet.name} planet={planet} headers={takeTitles(planet)} />)
    }
  </tbody>
);

class Table extends React.Component {
  render() {
    const { planets, searchText } = this.props;
    return (
      <table>
        <caption>Star Wars Planets</caption>
        <TableHeader headers={takeTitles(planets[0])} />
        {renderBody(planets, searchText)}
      </table>
    );
  }
}

const mapStateToProps = ({ filters: { filterByName } }) => ({
  searchText: filterByName.name,
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
