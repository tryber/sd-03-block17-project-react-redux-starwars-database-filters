import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderTable from './HeaderTable';
import TableInfo from './TableInfo';
import Inputs from './Inputs';
import FilterRemove from './FilterRemove';
import { getApi } from '../actions/apiActions';

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    if (this.props.loading) {
      return <h3>Carregando ..</h3>;
    }
    return (
      <div>
        <Inputs />
        <FilterRemove />
        <HeaderTable />
        <TableInfo />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.apiReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
