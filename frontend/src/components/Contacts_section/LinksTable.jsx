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
  function createData(name, Course, Email ) {
    return { name,Course, Email};
  }
  
  const rows = [
    createData('Teacher1','math','t1@gmail.com'),
    createData('Teacher2','python' ,'t2@gmail.com'),
    createData('Teacher3','english' ,'t3@gmail.com'),
    createData('Teacher4', 'german','t4@gmail.com'),
    createData('Teacher5', 'R','t5@gmail.com'),
    createData('Teacher6', 'java','t6@gmail.com'),
    createData('Teacher7', 'project','t7@gmail.com')
  ];
function LinksTable(){
    const classes = useStyles();
    return (
        
<TableContainer component={Paper} >
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow >
            <TableCell>Teachers</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   
  
        );
}

export default LinksTable ;