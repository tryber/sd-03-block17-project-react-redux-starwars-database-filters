import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import TableData from './TableData';
import { filterByNameAction } from '../actions/filterByNameAction';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedtext: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.dataFilterFunction = this.dataFilterFunction.bind(this);
  }

  async onChangeText(event) {
    const { value } = event.target;
    const { typedtext } = this.state;
    const { filterByName } = this.props;
    await this.setState({ typedtext: value });
    filterByName(typedtext);
    this.dataFilterFunction();
  }

  dataFilterFunction() {
    const { typedtext } = this.state;
    const { dataSw } = this.props;
    const newArrToFilter = [...dataSw];
    return newArrToFilter.reduce((acc, e) => {
      if (typedtext !== '' && e.name.toLowerCase().includes(typedtext.toLowerCase())) acc.push(e);
      return acc;
    }, []);
    // this.setState({ data: newData });
    // console.log(this.state.data)
  }

  searchbar() {
    const { typedtext } = this.state;
    return (
      <div>
        <label htmlFor="searchbar">
          <input
            type="text"
            onChange={this.onChangeText}
            id="searchbar"
            name="searchbar"
            value={typedtext}
            placeholder="Procure aqui"
          />
        </label>
      </div>
    );
  }

  render() {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
