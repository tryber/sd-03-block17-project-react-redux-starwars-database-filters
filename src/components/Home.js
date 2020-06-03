import React from 'react';
import Table from './Table';
import Input from './Input';
import { connect } from 'react-redux';
import { requestFetch } from '../action';

class Home extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    if(this.props.loading)return <p>Loading...</p>
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Input />
        <Table/>
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
