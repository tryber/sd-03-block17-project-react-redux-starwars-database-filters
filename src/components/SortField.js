import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { subimitSortAction } from '../actions/submitSortAction';

class SortField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { column: 'Name', sort: 'ASC' };
  }

  formatDataToDispatch(column, sort) {
    const { submitSort } = this.props;
    submitSort({ column, sort });
  }

  handleState(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { column, sort } = this.state;
    const { columns } = this.props;
    return (
      <div>
        <select data-testid="column-sort" onChange={(e) => this.handleState(e)} name="column" defaultValue="Name">
          {!!columns && Object.keys(columns).map((value) => (<option>{value}</option>))}
        </select>
        <label name="sort">
          {' '}
          Ascendente
          <input data-testid="column-sort-input" name="sort" onChange={(e) => this.handleState(e)} type="radio" value="ASC" defaultValue />
        </label>
        <label name="sort">
          {' '}
          Descendente
          <input data-testid="column-sort-input" name="sort" onChange={(e) => this.handleState(e)} type="radio" value="DESC" />
        </label>

        <button data-testid="column-sort-button" type="button" onClick={() => this.formatDataToDispatch(column, sort)}>Sort</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitSort: (data) => dispatch(subimitSortAction(data)),
});

const mapStateToProps = (state) => ({
  columns: state.requestReducer.data[0],
});

export default connect(mapStateToProps, mapDispatchToProps)(SortField);

SortField.propTypes = {
  submitSort: propTypes.func.isRequired,
  columns: propTypes.arrayOf(propTypes.object).isRequired,
};
