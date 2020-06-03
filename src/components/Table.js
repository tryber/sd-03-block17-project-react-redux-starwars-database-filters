import React from 'react';
import { connect } from 'react-redux';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.filterByName = this.filterByName.bind(this);
  }

  filterByName() {
    const { planets, searched } = this.props;
    const filtro = planets.filter(({ name }) => name.includes(searched));
    return filtro;
  }

  render() {
    const { planets, searched } = this.props;
    return (
      <div className='table-container'>
        <table className='table is-hoverable is-striped'>
          <TableHeaders />
          {searched ? (
            <TableBody arrPlanets={this.filterByName()} />
          ) : (
            <TableBody arrPlanets={planets} />
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.apiReducer.data,
  searched: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Table);
