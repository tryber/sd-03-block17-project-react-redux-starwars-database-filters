import React, { Component } from 'react';
import {connect } from 'react-redux';
import { requestData, fetchData } from '../action/index';
import requestReducer from '../reducers/index';

export class Table extends Component {
  componentDidMount() {  

async function fetch( ) {
  await this.props.request();
}
}

  render() {
    return (
      <div>
        <p>TABLE</p>
        {console.log(this.props)}
             </div>
    );
  }
}
const mapStateToProps = (state) => ({ value: state });
const mapDispatchToProps = (dispatch) => ({
  request: dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
