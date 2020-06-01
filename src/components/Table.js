import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import A_fetchPlanets from '../store/actions/A_fetchPlanets';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { A_fetchPlanets } = this.props;
    A_fetchPlanets();
  }

  render() {
    const { loading, error, data } = this.props;
    if (!loading && data !== undefined) {
      return (
        <div>
          {data.map((result) => <div>{result.name}</div>)}
        </div>
      );
    }
    if (error) { return <div>{error}</div>; }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.R_fetchPlanets.loading,
  error: state.R_fetchPlanets.error,
  data: state.R_fetchPlanets.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ A_fetchPlanets }, dispatch);


Table.propTypes = {
  A_fetchPlanets: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
