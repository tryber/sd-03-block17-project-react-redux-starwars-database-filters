import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../action';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    return (
      <div>
        <input data-testid='name-filter'
          type='text'
          value={this.state.text}
          placeholder='Faça uma pesquisa'
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(Input);
