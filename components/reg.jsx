import Navbar from './navbar';
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Person3Icon from '@mui/icons-material/Person3';


const initialValues = {
  email: "", password: "", fname: "", lname: "", phone: "", blood: ""
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email Is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
  password: Yup.string()
    .required("Password Is Required"),
  fname: Yup.string()
    .matches(!/^[a-zA-Z ]*$/i, "Alphabets and spaces only allowed")
    .required("First Name Is Required"),
  lname: Yup.string()
    .matches(!/^[a-zA-Z ]*$/i, "Alphabets and spaces only allowed")
    .required("Last Name Is Required"),
  phone: Yup.string()
    .matches(/\d+$/i, "Only in digits")
    .min(10, "Invalid Number")
    .min(10, "Invalid Number")
    .max(10, "Invalid Number")
    .required("Phone No Is Required"),
  blood: Yup.string()
    .required("Blood Group Is Required")

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
  return (
    <div>
      <Navbar />
      <Grid container >

        <Grid item xs={6} md={12} style={{ height: "91.3vh", overflow: "auto", backgroundColor: "#C6EEFA"}}>
          {/* <span> */}
          {/* <img src={p2} width="50px" height="50px"/> */}
          <h1
            style={{ color: "darkblue", marginLeft: "450px" }}><Person3Icon /> REGISTER AS PATIENT</h1>
          {/* </span> */}
          <Card variant='outlined' style={{ width: "900px", minHeight: "450px", paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "190px", background: "#202D57", borderRadius: "15px", marginBottom: "30px" }}>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              <Form>
                <span style={{ marginLeft: "100px" }}>
                  <Field
                    as={TextField}
                    id="fname"
                    label="First Name"
                    name="fname"
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "300px" }
                    }}
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    helperText={<ErrorMessage name="fname" component={Message} />}
                  />
                </span>
                <span style={{ marginLeft: "50px" }}>
                  <Field
                    as={TextField}
                    id="lname"
                    label="Last Name"
                    name="lname"
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "300px" }
                    }}
                    helperText={<ErrorMessage name="lname" component={Message} />}
                  />
                </span>

                <br /><br />
                <span style={{ marginLeft: "100px", marginTop: "20px" }}>
                  <Field
                    as={TextField}
                    id="email"
                    label="Email"
                    name="email"
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "677px" }
                    }}
                    helperText={<ErrorMessage name="email" component={Message} />}
                  />
                </span>

                <br /><br />
                <span style={{ marginLeft: "100px", marginTop: "20px" }}>
                  <Field
                    as={TextField}
                    id="password"
                    label="Password"
                    name="password"
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "677px" }
                    }}
                    helperText={<ErrorMessage name="password" component={Message} />}
                  />
                </span>
                <br /><br />
                <span style={{ marginLeft: "100px", paddingTop: "280px" }}>
                  <Field
                    as={TextField}
                    id="phone"
                    label="Phone No"
                    name="phone"
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "300px" }
                    }}
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    helperText={<ErrorMessage name="phone" component={Message} />}
                  />
                </span>

                <span style={{ marginLeft: "50px" }}>
                  <Field
                    as={TextField}
                    id="blood"
                    label="Blood Group"
                    name="blood"
                    InputLabelProps={{
                      sx: { color: "black", fontWeight: "semibold" }
                    }}
                    inputProps={{
                      style: { backgroundColor: "#C6EEFA", height: "20px", borderRadius: "15px", width: "300px" }
                    }}
                    helperText={<ErrorMessage name="blood" component={Message} />}
                  />
                </span>
                <br /><br /><br />

                <span style={{ paddingLeft: "370px" }}>
                  <ColorButton
                    type="submit"
                    variant="contained"

                  >
                    Submit
                  </ColorButton>
                </span>
              </Form>
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default PatientReg;