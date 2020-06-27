import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterTable from './filterTable';
import TableData from './TableData';
import fetchPlanets from '../actions';

class Table extends Component {
  componentDidMount() {
    this.props.requestAPIPlanets();
  }
  render() {
    console.log(this.props);
    console.log(this.props.planets);

    return (
      <main>
        {/* <FilterTable /> */}
        {/* <TableData planets={this.props.planets} /> */}
        <h3>StarWars Datatable with Filters</h3>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.Reducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPIPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
