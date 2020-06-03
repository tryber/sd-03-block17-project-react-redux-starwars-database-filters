import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data } = this.props;
    data && console.log(Object.keys(data.results[0]));
    return (
      <table>
        <tr>
          {data && Object.keys(data.results[0]).map((header) => <th key={header}>{header}</th>)}
        </tr>
        {data && Object.entries(data.results[0]).map((header) => (header[0] === 'residents' ? <th>Gabriel</th> : <th key={header}>{header[1]}</th>))}
        <tr />
      </table>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    getPlanets: () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((r) => r.json())
      .then((r) => dispatch({ type: 'API_CALL', r })),
  };
}
function mapState(state) {
  return {
    data: state.data,
  };
}


export default connect(mapState, mapDispatch)(Table);
