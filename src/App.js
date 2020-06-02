import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApiDataSw } from './actions/apiSWAction';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { apiRequestDispatch } = this.props;
    apiRequestDispatch();
  }

  render() {
    const { isLoading } = this.props;
    if (!isLoading) {
      return (
        <div className="App">
          <Table />
        </div>
      );
    }
    return (<span>Loading...</span>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiRequestDispatch: () => dispatch(getApiDataSw()),
});

const mapStateToProps = (state) => ({
  dataSw: state.apiSWReducer.data,
  isLoading: state.apiSWReducer.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  apiRequestDispatch: PropTypes.func,
  isLoading: PropTypes.bool,
};

App.defaultProps = {
  apiRequestDispatch: () => {},
  isLoading: true,
};
