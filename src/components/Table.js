import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import Filters from './Filters';
import actionFetchPlanets from '../store/actions/actionFetchPlanets';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    const {
      loading, error, data,
    } = this.props;
    if (!loading && data.length !== 0) {
      return (
        <div>
          <h1>StarWars Datatable with Filters:</h1>
          <Filters />
          <DataTable />
        </div>
      );
    }
    if (error) { return <div>{error}</div>; }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = ({ reducerFetchPlanets }) => ({
  loading: reducerFetchPlanets.loading,
  error: reducerFetchPlanets.error,
  data: reducerFetchPlanets.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { fetchPlanets: actionFetchPlanets }, dispatch,
);

Table.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.instanceOf(Array),
};

Table.defaultProps = {
  data: [],
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
