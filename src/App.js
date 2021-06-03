import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dessertsByName: Object.assign({}, ...props.rows.map((row) => ({[row.name]: row}))),
    };
    this.desserts = props.rows.map((row) => (row.name));
    this.classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.dessertsByName[event.target.id].portion = event.target.value;
    this.setState({dessertsByName: this.state.dessertsByName});
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className={this.classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Portion(g)</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.desserts.map((name) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{this.state.dessertsByName[name].calories}</TableCell>
                <TableCell align="right">{this.state.dessertsByName[name].fat}</TableCell>
                <TableCell align="right">{this.state.dessertsByName[name].carbs}</TableCell>
                <TableCell align="right">{this.state.dessertsByName[name].protein}</TableCell>
                <TableCell align="right">
                  <Input
                    id={name}
                    value={this.state.dessertsByName[name].portion}
                    onChange={this.handleChange}
                    />
                </TableCell>
                <TableCell align="right">{this.state.dessertsByName[name].portion/100 * this.state.dessertsByName[name].calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

