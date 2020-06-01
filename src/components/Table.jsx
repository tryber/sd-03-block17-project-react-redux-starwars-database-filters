import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import store from '../store/index';
import fetchPlanets from '../actions/fetchPlanetsAction';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const takeTitles = (planet) => (
  Object.keys(planet)
  .filter((key) => key !== 'residents')
);

const renderBody = (planets) => (
  <tbody>
    {
      planets.map((planet) =>
        <TableRow key={planet.name} planet={planet} headers={takeTitles(planet)} />)
    }
  </tbody>
);

class Table extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlanets());
  }

  render() {
    const { planets } = this.props;
    const isEmpty = planets.length === 0;
    return (
      <table>
        <caption>Star Wars Planets</caption>
        {isEmpty
        || 
        <>
          <TableHeader headers={takeTitles(planets[0])} />
          {renderBody(planets)}
        </>
        }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  dispatch: store.dispatch,
  planets: state.data,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(Table);
