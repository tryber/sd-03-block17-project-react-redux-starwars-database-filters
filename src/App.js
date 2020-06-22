import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import FilterNumeric from './components/FilterNumeric';
import TagNumericFilters from './components/TagNumericFilters';
import OrderComponent from './components/OrderComponent';
import { fetchData } from './action/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchUrl = this.fetchUrl.bind(this);
  }

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl() {
    const { request } = this.props;
    request();
  }

  render() {
    const { value } = this.props;
    const { isLoading } = value;
    return (
      <div>
        <InputFilter />
        <FilterNumeric />
        <TagNumericFilters />
        <OrderComponent />
        {isLoading
          ? <h1>Loading....</h1>
          : <Table />}

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});

const mapStateToProps = (state) => ({ value: state });

App.propTypes = {
  request: PropTypes.func,
  value: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  request: PropTypes.func,
  value: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
