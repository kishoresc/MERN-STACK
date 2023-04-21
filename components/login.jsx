import React from 'react'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import Navbar from './navbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
import Message from './message';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';


const initialValues = {
    email: "", password: ""
  }
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email Is Required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
      password: Yup.string()
      .required("Password Is Required")

  })
  


  const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:"50px",
    width:"10vw",
    alignItems:"center",
    fontWeight:"bold" ,
    backgroundColor: "#DF2B39",
    '&:hover': {
      backgroundColor: "#DF2B39"
    },
  }));

function Login() {
  const navigate=useNavigate();
  // const useStyles=makeStyles({
  //   root:{
  //     '&label.Mui-focused':{
  //       color:"white"
  //     }
  //   }
  // })
  
  // const classes=useStyles();

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    navigate('/details')
  }
  return (
    <div className='blur'>
      <Navbar />
      <Grid ml={10} mt={12}> 
      <Card variant='outlined' 
      sx={{width:{xs:"9vw",md:"19vw",lg:"29vw"},
      minHeight:{xs:"10vh",md:"60vh",lg:"40vh"},
      fontSize:{xs:"1rem",md:"1rem"}}}
      style={{ paddingTop: "0.8cm", paddingBottom: "0.8cm", background: "#202D57", borderRadius:"15px"}}>
        <Grid container >
          <Grid item xs={12} md={9.5} ml={2.5}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                <Form>

                    
              <span style={{ paddingLeft: "20px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  id="email"
                  variant="filled"
                  label="Enter your Email"
                  name="email"
                  inputProps={{
                    style: { backgroundColor: "#C6EEFA",height:"20px",borderRadius:"10px" }
                  }}
                  InputLabelProps={{
                    sx:{color:"darkblue",fontWeight:"semibold"}
                  }}
                  helperText={<ErrorMessage name="email" component={Message} />}
                />
              </span><br>
              </br><br></br>

              
              <span style={{ paddingLeft: "20px" }}>
                <Field
                  as={TextField}
                  fullWidth
                  variant="filled"
                  id="password"
                  label={"Enter your Password"}
                  name="password"
                  InputLabelProps={{
                    sx:{color:"darkblue",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: { backgroundColor: "#C6EEFA",height:"20px",borderRadius:"10px"}
                  }}
                  helperText={<ErrorMessage name="password" component={Message} />}
                />
              </span><br>
              </br><br></br>
      
              <span style={{paddingLeft:"16.5vmin"}}>
                <ColorButton
                  type="submit"
                  variant="contained"
                
                >
                  Login
                </ColorButton>
              </span>
              <br/><br/>
        
              <span style={{color:"white",paddingLeft:"17vmin"}}>
                New Here? <Link to="/patient" style={{textDecoration:"none",color:"orange"}}>SignUp</Link>
              </span>
                </Form>

         </Formik>
          </Grid>
        </Grid>
      </Card>
      </Grid>
    </div>
  )
}

export default Login