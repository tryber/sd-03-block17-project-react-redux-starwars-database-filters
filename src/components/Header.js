import React from 'react';
// import { connect } from 'react-redux';
// import { getApiDataSw } from '../actions/apiSWAction';

class Header extends React.Component {
  // componentDidMount() {
  //   const { apiRequestDispatch } = this.props;
  //   apiRequestDispatch();
  // }

  render() {
    return (
      <div>
        <h1>Star Wars Table</h1>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   apiRequestDispatch: () => dispatch(getApiDataSw()),
// });

export default Header;
