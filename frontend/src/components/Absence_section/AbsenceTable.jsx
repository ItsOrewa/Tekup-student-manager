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
  
  function createData(name, Hours) {
    return { name, Hours };
  }
  
  const rows = [
    createData('Python', 6),
    createData('Machine learning', 7),
    createData('Stat', 12),
    createData('Project', 12),
  ];
  function AbsenceTable(){
    const classes = useStyles();
    return ( 
<TableContainer component={Paper} >
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow >
            <TableCell>Courses</TableCell>
            <TableCell align="right">Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    );

}
export default AbsenceTable;