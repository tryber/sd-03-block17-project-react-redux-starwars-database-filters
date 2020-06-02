import React from 'react';
import { connect } from 'react-redux';
import fetchStarWarsApi from '../actions';
import Loading from './Loading';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  componentDidMount() {
    const { search } = this.props;
    search('planets');
  };

  ths() {
    const ths = [
      'name',
      'climate',
      'created',
      'diamenter',
      'edited',
      'gravity',
      'orbital period',
      'population',
      'rotation period',
      'surface water',
      'terrain'
    ];
    return ths;
  };

  table(data) {
    return (
      <table>
        <thead>
          <tr>
            {this.ths().map((item, index) => <th key={index}>{item}</th>)}
          </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);
