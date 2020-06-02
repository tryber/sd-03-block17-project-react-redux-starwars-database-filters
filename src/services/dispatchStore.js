import React from 'react';
import { connect } from 'react-redux';
import { fetchRequestAPI } from '../action/a_FetchRequestAPI';

class DispatchStore extends React.Component {

  componentDidMount() {
    const { requestAPIdispatch } = this.props;

    requestAPIdispatch();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAPIdispatch: () => dispatch(fetchRequestAPI()),
});

export default connect(null, mapDispatchToProps)(DispatchStore);
