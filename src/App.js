import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import Remove from './components/Remove';
import { requestFetch } from './actions/actions';

export class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render(){
    if (this.props.loading) return <h1>Loading...</h1>;
    else return (
      <div className="App">
        <header className="App-header">
          <Input />
          <Remove />
          <Table />
       </header>
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.getPlanets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
