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
    const { planets } = this.props;
    console.log(this.props);
    // console.log(planets);

    return (
      <main>
        <h3>StarWars Datatable with Filters</h3>
        <FilterTable />
        <TableData planets={planets} />
      </main>
    );
  }
}

const mapStateToProps = ({ planets }) => ({
  planets,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPIPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
