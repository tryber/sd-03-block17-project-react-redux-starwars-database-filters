import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header";
import TableHeaders from "./TableHeaders";
import Inputs from "./Inputs";
import SelectedFilters from "./SelectedFilters";
import TableData from "./TableData";
import { filterByNameAction } from "../actions/filterByNameAction";
import { filterByNumericValuesAction } from "../actions/filterByNumericValuesAction";

class Table extends React.Component {
  dataFilterFunction() {
    const { dataSw, typedText, numericSearched } = this.props;
    const newArrToFilter = [...dataSw];
    if (typedText !== '' || numericSearched.length > 0) {
      return newArrToFilter.reduce((acc, e) => {
        if (typedText !== '' && e.name.toLowerCase().includes(typedText.toLowerCase())) acc.push(e);
        return acc;
      }, []);
    }
    return dataSw;
  }

  // filterData(data, query) {
  //   const { allFilters } = this.props;
  //   const keysWithMinMax = ["listPrice", "bedrooms"];
  //   const filteredData = data.filter((item) => {
  //     for (let key in query) {
  //       if (item[key] === undefined) {
  //         return false;
  //       } else if (keysWithMinMax.includes(key)) {
  //         if (query[key]["min"] !== null && item[key] < query[key]["min"]) {
  //           return false;
  //         }
  //         if (query[key]["max"] !== null && item[key] > query[key]["max"]) {
  //           return false;
  //         }
  //       } else if (!query[key].includes(item[key])) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  //   return filteredData;
  // };

  render() {
    console.log('render chamado');
    // const { allFilters, dataSw } = this.props;
    return (
      <div>
        <Header />
        <Inputs />
        <SelectedFilters />
        <table>
          <TableHeaders />
          <TableData dataSw={this.dataFilterFunction()} />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (text) => dispatch(filterByNameAction(text)),
  filterByNumericValues: (obj) => dispatch(filterByNumericValuesAction(obj)),
});

const mapStateToProps = (state) => ({
  dataSw: state.apiSWReducer.data,
  isLoading: state.apiSWReducer.loading,
  allFilters: state.filters,
  typedText: state.filters.filterByName.name,
  numericSearched: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  typedText: PropTypes.string,
  dataSw: PropTypes.arrayOf(PropTypes.object),
  numericSearched: PropTypes.arrayOf(PropTypes.object),
  allFilters: PropTypes.objectOf(PropTypes.any).isRequired,
};

Table.defaultProps = {
  typedText: "",
  dataSw: [],
  numericSearched: {},
};
