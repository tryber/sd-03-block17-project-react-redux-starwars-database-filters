import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import fetchData from '../store/actions';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    return (
      <div>
        <p>Table Component</p>
      </div>
    );
  }
}

Table.propTypes = {
  fetchPlanets: propTypes.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
