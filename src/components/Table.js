import React from 'react';
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'


class Table extends React.Component {
  render() {
    
    return (
      <div className="table-container">
      <table className="table is-hoverable is-striped">
        <TableHeaders />
        <TableBody />
      </table>
      </div>
    );
  }
}


export default Table;
