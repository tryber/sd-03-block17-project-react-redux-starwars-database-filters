import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import TableData from './TableData';
import { filterByNameAction } from '../actions/filterByNameAction';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.dataFilterFunction = this.dataFilterFunction.bind(this);
  }

  onChangeText(event) {
    const { value } = event.target;
    const { filterByName } = this.props;
    filterByName(value);
  }

  dataFilterFunction() {
    const { dataSw, typedText } = this.props;
    const newArrToFilter = [...dataSw];
    if (typedText === '') return dataSw;
    return newArrToFilter.reduce((acc, e) => {
      if (typedText !== '' && e.name.toLowerCase().includes(typedText.toLowerCase())) acc.push(e);
      return acc;
    }, []);
  }

  searchbar() {
    const { typedText } = this.props;
    return (
      <div>
        <label htmlFor="searchbar">
          <input
            type="text"
            onChange={this.onChangeText}
            id="searchbar"
            name="searchbar"
            value={typedText}
            placeholder="Procure aqui"
          />
        </label>
      </div>
    );
  }

  render() {
    // const filterData = this.dataFilterFunction()
    console.log('estou sendo chamado', this.props);
    const { dataSw } = this.props;
    return (
      <div>
        <Header />
        {this.searchbar()}
        <table>
          <tbody>
            <tr className="table-headers">
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
            </tr>
          </tbody>
          <TableData dataSw={this.dataFilterFunction()} />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (text) => dispatch(filterByNameAction(text)),
});

const mapStateToProps = (state) => ({
  dataSw: state.apiSWReducer.data,
  isLoading: state.apiSWReducer.loading,
  typedText: state.apiSWReducer.filters.filterByName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
