import React from 'react';
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
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiRequestDispatch: () => dispatch(getApiDataSw()),
});

export default connect(null, mapDispatchToProps)(App);
