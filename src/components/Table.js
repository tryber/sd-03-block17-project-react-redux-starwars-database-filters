import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { handleFetch } from '../actions';

import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

class Table extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    console.log('component did mount table props', this.props);
    dispatchFetch();
  }

  render() {
    const { planets } = this.props;
    console.log('render planets', planets);
    return (
      <table>
        {planets.length !== 0 && <TableHeaders heads={Object.keys(planets[0])} />}
        {planets.length !== 0 ? planets.map((planet) => <TableRow data={planet} />)
          : <h2>Loading</h2>}
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state.requestReducer.planets);
  return { planets: state.requestReducer.planets };
};
const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: () => dispatch(handleFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  planets: propTypes.arrayOf(propTypes.object).isRequired,
  dispatchFetch: propTypes.func.isRequired,
};
