import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@mui/material/TablePagination';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action) {
  id += 1;
  return { id, name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action };
}

const data = [
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className="recruitment-tabele">
        <TableHead>
        <TableRow>
            <TableCell className={classes.tableCell}>Name</TableCell>
            <TableCell numeric className={classes.tableCell}>Post</TableCell>
            <TableCell numeric className={classes.tableCell}>Skill set</TableCell>
            <TableCell numeric className={classes.tableCell}>Exp</TableCell>
            <TableCell numeric className={classes.tableCell}>CTC</TableCell>
            <TableCell className={classes.tableCell}>EXP CTC</TableCell>
            <TableCell numeric className={classes.tableCell}>Notice period</TableCell>
            <TableCell numeric className={classes.tableCell}>Location</TableCell>
            <TableCell numeric className={classes.tableCell}>Status</TableCell>
            <TableCell numeric className={classes.tableCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
              <TableCell className={classes.TableCell}>
                {n.name}
              </TableCell>
              <TableCell numeric className={classes.tableCell}>{n.post}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.skillset}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.exp}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.ctc}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n. expctc}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.noticeperiod}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.location}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.status}</TableCell>
              <TableCell numeric className={classes.tableCell}>{n.action}</TableCell>
            </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);