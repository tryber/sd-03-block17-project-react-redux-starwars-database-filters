import React from 'react';
import { connect } from 'react-redux';
import { changeNameValue } from '../actions'

const NameFilter = (props) => {
  const { nameValueChange } = props
  return (
    <div>
      <input
        data-testid='name-filter'
        type="text"
        placeholder="Search"
        onChange={(event) => nameValueChange(event.target.value)}
      />
    </div>
  );
}

const mapDispatchToprops = (dispatch) => ({
  nameValueChange: (name) => dispatch(changeNameValue(name))
})

export default connect(null, mapDispatchToprops)(NameFilter);
