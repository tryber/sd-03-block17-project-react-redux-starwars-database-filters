import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import planetShape from '../services/planetShape';

const takeTitles = (planet) => (
  Object.keys(planet)
  .filter((key) => key !== 'residents')
);

const renderBody = (planets, filterName, properties) => (
  <tbody>
    {planets
      .filter((planet) => planet.name.includes(filterName))
      .map((planet) =>
        <TableRow key={planet.name} planet={planet} properties={properties} />)
    }
  </tbody>
);

class Table extends React.Component {
  render() {
    const { planets, searchText } = this.props;
    const headers = takeTitles(planets[0]);
    return (
      <table>
        <caption>Star Wars Planets</caption>
        <TableHeader headers={headers} />
        {renderBody(planets, searchText, headers)}
      </table>
    );
  }
}

const mapStateToProps = ({ data, filters: { filterByName } }) => ({
  planets: data,
  searchText: filterByName.name,
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.planetShape()).isRequired,
};

export default connect(mapStateToProps)(Table);
