import React, { Component } from 'react';
import {connect } from 'react-redux';

export class Table extends Component {

  render() {
    return (
      <div>
        {/*  {this.props.value.data.results.length === 1 
        ? <h1> {this.props.value.data.results[0]}</h1> 
        : <p> <table>

         </table>
          {this.props.value.data.results.forEach(element => {
        })
         }</p>}        */}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ value: state });


export default connect(mapStateToProps)(Table);
