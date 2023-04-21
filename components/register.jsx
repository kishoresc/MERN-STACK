import Navbar from './navbar';
import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '../FormsUI/Textfield';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { Card, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Person3Icon from '@mui/icons-material/Person3';
import { FormControl,InputLabel, MenuItem, Select } from '@mui/material';


const initialValues = {
  email: "", password: "", fname: "", lname: "", phone: ""
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
  password: Yup.string()
    .required("Password Is Required"),
  fname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only Alphabets are allowed")
    .required("First Name Is Required"),
  lname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only Alphabets are allowed")
    .required("Last Name Is Required"),
  phone: Yup.string()
    .matches(/\d+$/i, "Only in digits")
    .min(10, "Invalid Number")
    .min(10, "Invalid Number")
    .max(10, "Invalid Number")
    .required("Phone No Is Required")
})


const onSubmit = (values, onSubmitProps) => {
  onSubmitProps.resetForm();
}

const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  width: "160px",
  fontWeight: "bold",
  backgroundColor: "#DF2B39",
  '&:hover': {
    backgroundColor: "#DF2B39"
  },
}));


function PatientReg() {

  const [blood,setBlood]=useState("");
  const handleChange=(event)=>{
      setBlood(event.target.value)
    }
  return (
    <div>
      <Navbar />
      <Grid container style={{ height: "91.5vh", overflow: "auto", backgroundColor: "#C6EEFA" }}>
        <Grid md={2}></Grid>
        <Grid item md={8}>
          <h1 style={{ color: "darkblue", textAlign: "center" }}><Person3Icon /> REGISTER AS PATIENT</h1>
          <Grid container >

            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} sx={{ backgroundColor: "#202D57", borderRadius: "35px" }}>

              <Container maxWidth="md" >
                <div>
                  <Box
                    sx={{
                      my: 7,
                    }}
                  >
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form>

                        <Grid container spacing={4} >

                          <Grid item xs={6}>
                            <TextField
                              name="fname"
                              label="First Name"
                              
                            />
                          </Grid>


                          <Grid item xs={6}>
                            <TextField
                              name="lname"
                              label="Last Name"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              type="email"
                              name="email"
                              label="Email"                                                         
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              type="password"
                              name="password"
                              label="Password"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <TextField
                              name="phone"
                              label="Phone Number"
                            />
                          </Grid>

                          <Grid item xs={6}>
                              <FormControl fullWidth variant='filled'>
                              <InputLabel> Blood group</InputLabel>
                              <Select onChange={handleChange}
                                style={{ width: "100%", backgroundColor: "#C6EEFA", borderRadius: "3px", color: "black" }}
                                defaultValue={10}>
                                <MenuItem value={10}>A+ve</MenuItem>
                                <MenuItem value={20}>A-ve</MenuItem>
                                <MenuItem value={30}>O+ve</MenuItem>

                              </Select>
                              </FormControl>
                            
                          </Grid>

                          <Grid item xs={12} sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                            <Button sx={{ backgroundColor: "#df2b39", color: "white", borderRadius: "12px", width: "20%", '&:hover': { backgroundColor: "red" } }}
                            type= "submit">
                              Submit
                            </Button>
                          </Grid>


                        </Grid>

                      </Form>
                    </Formik>
                  </Box>
                </div>

              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={2}></Grid>
      </Grid>

    </div>
  )
}

export default PatientReg;