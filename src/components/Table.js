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

  renderTableHead() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).splice(0, 9).map((info) => (<th key={info}>{info}</th>))}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            {Object.values(row).splice(0, 9).map((value) => (<td key={value}>{value}</td>))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        {this.renderTableHead()}
        {this.renderTableBody()}
      </table>
    );
  }
}

Table.propTypes = {
  fetchPlanets: propTypes.func.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
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
