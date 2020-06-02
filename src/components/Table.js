import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchStarWarsApi from '../actions';
import Loading from './Loading';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  titilesTable() {
    return (
      <tr>
        <th>name</th>
        <th>climate</th>
        <th>created</th>
        <th>diamenter</th>
        <th>edited</th>
        <th>gravity</th>
        <th>orbital period</th>
        <th>population</th>
        <th>rotation period</th>
        <th>surface water</th>
        <th>terrain</th>
      </tr>
    );
  }

  componentDidMount() {
    const { search } = this.props;
    search('planets');
  }

  table(data) {
    return (
      <table>
        <thead>
          {this.titilesTable()}
        </thead>
        <tbody>
          {data.map((item) => <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diamenter}</td>
            <td>{item.edited}</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    const { data, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div>
        {this.table(data)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestData.data,
  isFetching: state.requestData.isFetching,
  error: state.requestData.error,
});

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(fetchStarWarsApi(value)),
});

Table.propTypes = {
  search: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
