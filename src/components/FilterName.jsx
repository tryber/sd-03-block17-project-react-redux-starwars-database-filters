import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions/index';

class FilterName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          value={this.state.text}
          placeholder="planet name here..."
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   numericValues: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (name) => dispatch(filterByName(name)),
// });

// FilterName.propTypes = {
//   filterByName: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
export default FilterName