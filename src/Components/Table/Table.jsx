import React from 'react';
import { connect } from 'react-redux';

import { fetchRequestAPI } from '../Actions';
import InputNamePlanet from './InputNamePlanet';

import './Table.css';
import CreateTable from './CreateTable';

class Table extends React.Component {
  componentDidMount() {
    const { apiRequestDispatch } = this.props;

    apiRequestDispatch();
  }

  hearderTable() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation</th>
          <th>Orbital</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
    )
  }

  filteredPlanet(data) {
    const { nameInput } = this.props;
    if (nameInput !== '') {
    return data.filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()));
    }
  return data;
  }

  render() {
    const { loading, data } = this.props;
    console.log(data)
    return (
      <div className="TabelaProdutos" >
        <div>
          <hr style={{ border: "outset" }} />
          <h1>Star Wars Table</h1>
          <hr style={{ border: "outset" }} />
        </div>
        <div className="input-filter">
          <InputNamePlanet />
        </div>
        <table >
          {this.hearderTable()}
          <CreateTable data={this.filteredPlanet(data)} />
        </table>
        {loading && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestAPIReducer.data,
  loading: state.requestAPIReducer.loading,
  nameInput: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  apiRequestDispatch: () => dispatch(fetchRequestAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
