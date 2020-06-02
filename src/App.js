import React from 'react';
import { connect } from 'react-redux';
import { getApiDataSw } from './actions/apiSWAction';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { apiRequestDispatch, dataSw } = this.props;
    apiRequestDispatch();
    this.setState({ data: dataSw });
  }

  render() {
    const { data } = this.state;
    const { isLoading } = this.props;
    if (!isLoading) {
      return (
        <div className="App">
          <Table dataSw={data} />
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
