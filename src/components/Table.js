import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { handleFetch } from '../actions/fetchActions';

import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

class Table extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    dispatchFetch();
  }

  render() {
    const { data } = this.props;
    return (
      <table>
        {data.length !== 0 && <TableHeaders heads={Object.keys(data[0])} />}
        {data.length !== 0 ? data.map((planet) => <TableRow data={planet} />)
          : <h2>Loading</h2>}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.requestReducer.data });
const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: () => dispatch(handleFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  dispatchFetch: propTypes.func.isRequired,
};
