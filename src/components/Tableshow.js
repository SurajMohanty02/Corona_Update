import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Covidapi} from '../Covid/Covidapi';
import { TextField } from '@material-ui/core';


const Tableshow=()=> {
    const [search,setsearch]=useState();
    const [countries,setcountry]=useState([]);
    useEffect(() => {
      Covidapi().then((data)=>{setcountry(data)
      }).
      catch((error)=>console.log("error",error))
  
    }); 
    const InputEvent=(e)=>{
      setsearch(e.targat.value)
    }
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
    return (
        <TableContainer component={Paper}>
        
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="right">Total Cases</StyledTableCell>
              <StyledTableCell align="right">Active Cases</StyledTableCell>
              <StyledTableCell align="right">Critical</StyledTableCell>
              <StyledTableCell align="right">Total deaths</StyledTableCell>
              <StyledTableCell align="right">Total Recovered</StyledTableCell>
              <StyledTableCell align="right">New Cases</StyledTableCell>
              <StyledTableCell align="right">New Deaths</StyledTableCell>
              <StyledTableCell align="right">Total Tests</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row["country"]}
                </StyledTableCell>
                <StyledTableCell align="right">{row["cases"]}</StyledTableCell>
                <StyledTableCell align="right">{row["active"]}</StyledTableCell>
                <StyledTableCell align="right">{row["critical"]}</StyledTableCell>
                <StyledTableCell align="right">{row["deaths"]}</StyledTableCell>
                <StyledTableCell align="right">{row["recovered"]}</StyledTableCell>
                <StyledTableCell align="right">{row["todayCases"]}</StyledTableCell>
                <StyledTableCell align="right">{row["todayDeaths"]}</StyledTableCell>
                <StyledTableCell align="right">{row["totalTests"]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
       
      </TableContainer>
    );
  }       
       


export default Tableshow;
