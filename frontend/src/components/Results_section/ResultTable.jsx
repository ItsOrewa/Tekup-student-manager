import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor:'rgba(36, 49, 105, 0.336)'
    },
  });
  
  function createData(name, DS, Examen, Tp, MoyModule) {
    return { name, DS, Examen, Tp, MoyModule };
  }
  
  const rows = [
    createData('Python', 6, 6.5, 14, 10),
    createData('Machine learning', 7, 9.7, 13, 14.3),
    createData('Stat', 12, 16.0, 24, 6.0),
    createData('Project', 12, 16.0, 24, 6.0),
  ];
  function ResultTable(){
    const classes = useStyles();
    return (
<TableContainer component={Paper} >
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow >
            <TableCell>Module</TableCell>
            <TableCell align="right">DS</TableCell>
            <TableCell align="right">Examen</TableCell>
            <TableCell align="right">Tp</TableCell>
            <TableCell align="right">Moy Module</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.DS}</TableCell>
              <TableCell align="right">{row.Examen}</TableCell>
              <TableCell align="right">{row.Tp}</TableCell>
              <TableCell align="right">{row.MoyModule}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    );

}
export default ResultTable;