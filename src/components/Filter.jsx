import React from 'react';

export default function Filter({ column, comparison, value }) {
  return (
    <div>
      <span>{column}</span>
      <span>{comparison}</span>
      <span>{value}</span>
    </div>
  );
}
