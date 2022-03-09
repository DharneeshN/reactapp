import React , { useEffect, useState } from 'react'
import {Grid,Paper}  from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     GridStyle:{
       color:'red'
       
     }
});

function ErrorPage() {
  const classes =useStyles();

    const [employeeList, setemployeeList] = useState(JSON.parse(localStorage.getItem("employeeList")) || [])
   

    console.log("OUt print")
    
    useEffect(()=>{
    console.log("first");
     return()=>{
       console.log("unmount")
     }
    },[])

    useEffect(() => {
        console.log("in");
        if(employeeList.length === 0){
          fetch("https://api.github.com/users")
          .then((res) => res.json())
          .then((json) => {
            localStorage.setItem("employeeList", JSON.stringify(json));
            setemployeeList(json);
          })
        }
      }, [])
    
      // console.log(employeeList);
    return (
      <>
    <div>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
           {
        employeeList.map((employee) => {
          return (
            <Grid item xs={12}   md={6} lg={4}  key={employee.id}>
              <Paper className={classes.GridStyle}>{employee.login}</Paper>
              <Paper className={classes.GridStyle}>{employee.node_id}</Paper>
            </Grid>
          )
        })
      }
       </Grid>
       </div>
       </>
    )
}

export default ErrorPage



