import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filters } from '../actions/NameFilterAction';

class SeachImputs extends React.Component {
  render() {
    const { nameFilter } = this.props;
    return (
      <div>
        <form>
          <input
            data-testid="name-filter"
            type="text"
            onChange={(elem) => nameFilter(elem.target.value)}
            placeholder="Digite um nome"
          />
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  nameFilter: (text) => dispatch(filters(text)),
});

export default connect(null, MapDispatchToProps)(SeachImputs);

SeachImputs.propTypes = {
  nameFilter: PropTypes.func.isRequired,
};
