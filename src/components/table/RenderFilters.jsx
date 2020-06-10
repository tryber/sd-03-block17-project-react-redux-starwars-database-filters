import React from 'react';
import PropTypes from 'prop-types';

class RenderFilters extends React.Component {
  render() {
    // <p key={item.column}>{`${item.column} ${item.comparison} ${item.value}`}</p>
    const { filter: { column, comparison, value } } = this.props;
    return (
      <div>
        <span>
          {column}
          &nbsp;
        </span>
        <span>
          {comparison}
          &nbsp;
        </span>
        <span>
          {value}
          &nbsp;
        </span>
      </div>
    );
  }
}

RenderFilters.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RenderFilters;
