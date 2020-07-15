import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../action';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    const { filterName } = this.props;
    filterName(event.target.value);
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input
          className="input"
          data-testid="name-filter"
          type="text"
          value={text}
          placeholder="Faça uma pesquisa"
          onChange={(event) => this.onTextChange(event)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(Input);

Input.propTypes = {
  filterName: PropTypes.func.isRequired,
};
