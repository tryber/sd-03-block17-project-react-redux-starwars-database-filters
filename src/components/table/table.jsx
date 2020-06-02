import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderThead from './renderThead';
import RenderTbody from './renderTbody';
import { requestAction } from '../../actions';

class Table extends React.Component {
  componentDidMount() {
    const { requestTable } = this.props;
    requestTable();
  }

  render() {
    const { table } = this.props;

    return (
      <div className="table-container">
        <table>
          <RenderThead />
          <RenderTbody table={table} />
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  requestTable: PropTypes.func.isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

const mapStateTProps = (state) => ({
  table: state.requestReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  requestTable: () => dispatch(requestAction()),
});

export default connect(mapStateTProps, mapDispatchToProps)(Table);
