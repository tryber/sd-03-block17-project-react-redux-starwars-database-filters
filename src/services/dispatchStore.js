import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRequestAPI } from '../action/index';

class DispatchStore extends React.Component {

  componentDidMount() {
    const { requestAPIdispatch } = this.props;

    requestAPIdispatch();
  }

  render() {
    return (
      <div>
        <h2>.</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAPIdispatch: () => dispatch(fetchRequestAPI()),
});

DispatchStore.propTypes = {
  requestAPIdispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DispatchStore);
