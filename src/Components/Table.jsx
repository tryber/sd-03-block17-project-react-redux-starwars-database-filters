import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableData from './TableData';

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableData />
      </table>
    );
  }
}

export default Table;
