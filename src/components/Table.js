import React from 'react';
import HeaderTable from './HeaderTable';


function Table() {
  return (
    <div className="container">
      <table className="table is-hoverable">
        <HeaderTable />
      </table>
    </div>
  );
}

export default Table;
