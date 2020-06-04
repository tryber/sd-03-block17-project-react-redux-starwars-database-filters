import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';


function filterPlanetsFunc(data, filters) {
  let filterPlanets;
  filters.forEach((item) => {
    if (item.comparison === 'bigger_then') {
      filterPlanets = data.filter((element) => parseInt(element[item.column], 10) > parseInt(item.value, 10));
    } else if (item.comparison === 'less_then') {
      filterPlanets = data.filter((element) => parseInt(element[item.column], 10) < parseInt(item.value, 10));
    } else if (item.comparison === 'equal') {
      filterPlanets = data.filter((element) => parseInt(element[item.column], 10) === parseInt(item.value, 10));
    }
    data = filterPlanets;
  });
  return filterPlanets;
}

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
    
    const { titles } = this.state;
    const { name, isFiltered, filters } = this.props;
    let { data } = this.props;
    if (isFiltered) {
      data = filterPlanetsFunc(data, filters);
    }
    return (
      <table>
        <thead>
          <tr>
            {titles.map((item) => <th key={item.id}>{item.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.filter((item) => item.name.includes(name))
            .map((item) => <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.climate}</td>
              <td>{item.created}</td>
              <td>{item.diameter}</td>
              <td>{item.edited}</td>
              <td>#</td>
              <td>{item.gravity}</td>
              <td>{item.orbital_period}</td>
              <td>{item.population}</td>
              <td>#</td>
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

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
  isFiltered: state.filters.isFiltered,
});



Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Table);
