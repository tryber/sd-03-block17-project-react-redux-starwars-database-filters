import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import Remove from './Remove';
import InputTable from './InputTable';
import { requestFetch } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    if (this.props.loading) return <p>Loading...</p>;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <InputTable />
        <Remove />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.ReducerPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
