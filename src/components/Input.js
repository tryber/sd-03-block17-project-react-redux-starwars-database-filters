import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <input data-testid='name-filter'
          type='text'
          value={this.state.text} 
          placeholder='Faça uma pesquisa'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}