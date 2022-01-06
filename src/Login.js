import React, { useState, useEffect } from "react";
import { Input, TextField, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  GridStyle: {
    alignItems: "stretch",
    backgroundColor: "purple",
    color: "#0f2425",
    fontStyle: "oblique",
    backgroundImage:
      "url(" +
      "https://images.pexels.com/photos/5739492/pexels-photo-5739492.jpeg?cs=srgb&dl=pexels-mofugah-nash-5739492.jpg&fm=jpg" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    left: 0,
    width: "100%",
  },
  input: {
    color: "White",
  },
});

const ariaLabel = { "aria-label": "description" };

function Login() {
  const [count, setCount] = useState(null);
  const classes = useStyles();

  //     const [login, setlogin] = useState(null)
  const [value, setValue] = useState(null);
  const nav = useNavigate();

  const handlesubmit = (e) => {
    nav("/Home");
  };
  const handlesubmit1 = (e) => {
       nav("/Courses");
     };

  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate('/Courses')
  // }

  return (
    <div>
      {count}

      <Grid container spacing={2} className={classes.GridStyle}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            minWidth: "50%",
            height: "110vh",
          }}
        >
          <Typography variant="h4">Personal Details</Typography>
          <Input placeholder="Name" label="Name" inputProps={ariaLabel} />
          <br /> <br />
          <Input placeholder="Email-ID" inputProps={ariaLabel} />
          <br /> <br />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            style={{ color: "white" }}
          >
            <DatePicker
              placeholder="Date of birth"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br /> <br />
          <TextField
            className={classes.Grid}
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            InputProps={{
              className: classes.input,
            }}
          />
          {/* </Box> */}
          <br />
          <Button onClick={handlesubmit}> Submit</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          {/* <Box
                component="form"
             sx={{ backgroundColor: 'primary.dark',
                    color: 'primary.main',
                    width: 600,
                    height: 600, }}
                 noValidate
                autoComplete="off"
                > */}
          {/* className={classes.GridStyle} */}

          <Typography variant="h4">Professional details</Typography>
          <Input placeholder="Emp-ID" inputProps={ariaLabel} />
          <br />
          <br />
          <br />
          <Input placeholder="Company-Name" inputProps={ariaLabel} />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Office Location"
            multiline
            rows={4}
          />
          {/* </Box> */}
          <br />
          <Button onClick={handlesubmit1}> Submit</Button>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Login;
