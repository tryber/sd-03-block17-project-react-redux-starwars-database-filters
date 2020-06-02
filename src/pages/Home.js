import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets } from '../actions';
import Table from '../components/Table';

class Home extends React.Component {
  async componentDidMount() {
    const { getPlanets } = this.props;
    await getPlanets();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="Home">
        <Table data={data} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

const mapStateToProps = (state) => ({
  data: state.selectPlanets.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
