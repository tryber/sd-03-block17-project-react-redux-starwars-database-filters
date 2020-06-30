import React from 'react';
import Head from './Head';
import Body from './Body';

function Table() {
  return (
    <div className="container">
      <table className="table is-hoverable">
        <Head />
        <Body />
      </table>
    </div>
  );
}

export default Table;
