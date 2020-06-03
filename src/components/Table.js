import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        { id: 1, title: 'name' },
        { id: 2, title: 'climate' },
        { id: 3, title: 'created' },
        { id: 4, title: 'diameter' },
        { id: 5, title: 'edited' },
        { id: 6, title: 'films' },
        { id: 7, title: 'gravity' },
        { id: 8, title: 'orbital period' },
        { id: 9, title: 'population' },
        { id: 10, title: 'residents' },
        { id: 11, title: 'rotation period' },
        { id: 12, title: 'surface water' },
        { id: 13, title: 'terrain' },
      ],
    };
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
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.table()}
      </div>
    );
  }
}


Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
