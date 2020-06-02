import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchStarWarsApi from '../actions';
import Loading from './Loading';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        { id: 'teste', title: 'teste' },
        { id: 1, title: 'name' },
        { id: 2, title: 'climate' },
        { id: 3, title: 'created' },
        { id: 4, title: 'diameter' },
        { id: 5, title: 'edited' },
        { id: 6, title: 'gravity' },
        { id: 7, title: 'orbital period' },
        { id: 8, title: 'population' },
        { id: 9, title: 'rotation period' },
        { id: 10, title: 'surface water' },
        { id: 11, title: 'terrain' },
        { id: 'teste2', title: 'teste2' },
      ],
    };
  }

  componentDidMount() {
    const { search } = this.props;
    search('planets');
  }

  table() {
    const { data } = this.props;
    const { titles } = this.state;
    return (
      <table>
        <thead>
          <tr>
            {titles.map((item) => <th key={item.id}>{item.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <tr key={item.name}>
            <td>Teste</td>
            <td>{item.name}</td>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
            <td>Teste</td>
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div>
        {this.table()}
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
