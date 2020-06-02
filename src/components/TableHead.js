import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const tableCell = () => ({
  props: [
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Surface Water',
    'Population',
  ],
});

function SimpleTable(props) {
  const classes = useStyles();
  const { all: { showResults, data: { results } } } = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {tableCell().props.map((cell) => <TableCell align="right">{cell}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {showResults && results.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.rotation_period}</TableCell>
              <TableCell align="right">{row.orbital_period}</TableCell>
              <TableCell align="right">{row.diameter}</TableCell>
              <TableCell align="right">{row.climate}</TableCell>
              <TableCell align="right">{row.gravity}</TableCell>
              <TableCell align="right">{row.surface_Water}</TableCell>
              <TableCell align="right">{row.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const MapStateToProps = (state) => ({
  all: state.apiData,
});

SimpleTable.propTypes = {
  all: PropTypes.isRequired,
};

export default connect(MapStateToProps)(SimpleTable);
