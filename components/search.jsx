import Navbar from './navbar';
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, ErrorMessage, Form, Field } from "formik";
import Drawer from '@mui/material';
import * as Yup from 'yup';
import Message from './message';
import p2 from '../images/45.jpg';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';


const initialValues = {
  state: "", city: ""
}

const validationSchema = Yup.object({
  state: Yup.string()
    .required("State Is Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  city: Yup.string()
    .required("City Is Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
})

const onSubmit = (values, onSubmitProps) => {
  onSubmitProps.resetForm();
}

const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  backgroundColor: "#DF2B39",
  '&:hover': {
    backgroundColor: "#DF2B39",
  },
}));

function Search() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item
          xs={12}
          sm={12}
          md={12}
          sx={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(https://media.istockphoto.com/id/1207212203/photo/providing-compassion-during-difficult-times.jpg?s=612x612&w=0&k=20&c=tkl6OSpD3I23TGPeHeWqHOpuJkLgfLA-ux3GgP7tf00=)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: "91.5vh"
          }}>
          <div align="center">
            <br /><br /><br /><br /><br />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
             
                <Form>
                  
                    <Field
                      as={TextField}
                      label="Enter State"
                      name="state"
                      id="state"
                      variant="filled"
                      InputLabelProps={{
                        sx: { color: "black"}
                      }}
                      inputProps={{
                        style: { backgroundColor: "rgba(211, 217, 223, 0.982)", borderRadius: "5px" }
                      }}
                      helperText={<ErrorMessage name="state" component={Message} />}
                    />
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Field
                    as={TextField}
                    label="Enter City"
                    name="city"
                    id="city"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "black" }
                    }}
                    inputProps={{
                      style: { backgroundColor: "rgba(211, 217, 223, 0.982)", borderRadius: "5px" }
                    }}
                    helperText={<ErrorMessage name="city" component={Message} />}
                  />
                  
                  <br /><br />


                  <ColorButton
                    type="submit"
                    variant="contained"

                  >
                    Search Doctor
                  </ColorButton>


                </Form>
              
            </Formik>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Search;