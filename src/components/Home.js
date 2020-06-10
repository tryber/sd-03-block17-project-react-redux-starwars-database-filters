import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import RemoveFilter from './RemoveFilter';
import Input from './Input';
import { requestFetch } from '../action';

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
        <Input />
        <RemoveFilter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
