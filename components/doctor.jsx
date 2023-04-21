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
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { useState } from 'react';


const initialValues = {
    email: "", password: "",fname:"",lname:"",phone:"",blood:"",dob:"",bio:""
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
      .min(10,"Invalid Number")
      .min(10,"Invalid Number")
      .max(10,"Invalid Number")
      .required("Phone No Is Required"),
      blood: Yup.string()
      .required("Blood Group Is Required"),
      dob: Yup.string()
      .required("Date of Birth Is Required"),
      bio: Yup.string()
      .required("Bio Is Required")
 
  })
  
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:"50px",
    width:"160px",
    fontWeight:"bold" ,
    backgroundColor: "#DF2B39",
    '&:hover': {
      backgroundColor: "#DF2B39"
    },
  }));


function Doctor(){
    const [blood,setBlood]=useState("");
    const handleChange=(event)=>{
        setBlood(event.target.value)
      }
    return (
        <div>
        <Navbar />
        <Grid container >

        <Grid item xs={8} md={2} style={{height:"89.3vh" }}>
            <Box variant="outlined" style={{height:"50px",width:"256px",backgroundColor:"darkblue"}}>
              <div style={{color:"white",fontSize:"20px",marginLeft:"55px",paddingTop:"10px"}}>
              Registration
              </div>
            </Box>
      

            <Toolbar style={{backgroundColor:"#202D57",height:"645px"}}>
<span style={{fontSize:"19px",marginBottom:"20px"}}>
    <br/>
    <Link to="/patient" style={{textDecoration:"none",color:"white",marginLeft:"45px",paddingBottom:"50px"}}>
    Patient 
    </Link>

 <br/><br/>
 <Link to="/doc" style={{textDecoration:"none",color:"white",marginLeft:"45px"}}>
 Doctor
 </Link>
 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 <span style={{color:'white',marginLeft:"10px"}}>
    For emergency :
    <br/>
    <span style={{marginLeft:"30px"}}>
    9xxxxxxxxx
    </span>
 </span>
 </span>
</Toolbar>
</Grid>
<Grid item xs={6} md={10} style={{height:"91.3vh",overflow:"auto",backgroundColor:"#C6EEFA" }}>
   {/* <span> */}
   {/* <img src={p2} width="50px" height="50px"/> */}
   <h1 
   style={{color:"darkblue",marginLeft:"450px"}}><Person3Icon/> REGISTER AS DOCTOR</h1>
   {/* </span> */}
   <Card variant='outlined' style={{ width: "900px", minHeight:"450px",paddingTop: "0.8cm", paddingBottom: "0.8cm", marginLeft: "190px", background: "#202D57", borderRadius:"15px",marginBottom: "30px" }}>
       
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                <Form>
                    <span style={{marginLeft:"100px"}}>
                <Field
                  as={TextField}
                  id="fname"
                  label="First Name"
                  name="fname"
                  inputProps={{
                    style: { backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px" }
                  }}
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  helperText={<ErrorMessage name="fname" component={Message} />}
                />
                </span>
                <span style={{marginLeft:"50px"}}> 
                <Field
                  as={TextField}
                  id="lname"
                  label="Last Name"
                  name="lname"
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: {backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px" }
                  }}
                  helperText={<ErrorMessage name="lname" component={Message} />}
                />
            </span>
            
            <br/><br/>
            <span style={{marginLeft:"100px",marginTop:"20px"}}> 
                <Field
                  as={TextField}
                  id="email"
                  label="Email"
                  name="email"
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: {backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px"}
                  }}
                  helperText={<ErrorMessage name="email" component={Message} />}
                />
            </span>
            <span style={{marginLeft:"50px"}}> 
                <Field
                  as={TextField}
                  id="dob"
                  label="DOB"
                  name="dob"
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: {backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px" }
                  }}
                  helperText={<ErrorMessage name="dob" component={Message} />}
                />
            </span>
            
            <br/><br/>
            <span style={{marginLeft:"100px",marginTop:"20px"}}> 
                <Field
                  as={TextField}
                  id="password"
                  label="Password"
                  name="password"
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: {backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px" }
                  }}
                  helperText={<ErrorMessage name="password" component={Message} />}
                />
            </span>
            
              <span style={{marginLeft:"50px",paddingTop:"280px"}}>
                <Field
                  as={TextField}
                  id="phone"
                  label="Phone No"
                  name="phone"
                  inputProps={{
                    style: { backgroundColor: "#C6EEFA",height:"20px",borderRadius:"15px",width:"300px" }
                  }}
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  helperText={<ErrorMessage name="phone" component={Message} />}
                />
                </span>
<br/><br/>
<FormControl>
                    <InputLabel style={{paddingLeft:"130px"}}>Blood Group</InputLabel>
                    <Select label="Blood Group" onChange={handleChange}
                    style={{width:"300px",backgroundColor:"#C6EEFA",marginLeft:"100px",borderRadius:"15px",width:"325px",color:"black",height:"62px"}}
                    defaultValue={10}
                   >
                        <MenuItem value={10}>A+ve</MenuItem>
                        <MenuItem value={20}>A-ve</MenuItem>
                        <MenuItem value={30}>O+ve</MenuItem>
                        
                    </Select>
                    </FormControl>

                    <FormControl style={{}}>
            <Card style={{width:"325px",marginLeft:"50px",backgroundColor:"#C6EEFA",borderRadius:"15px",height:"62px"}}>
            
                <FormLabel style={{color:"black",paddingLeft:"10px",paddingTop:"3px",color:"#DF2B39"}}>Gender</FormLabel>
                <RadioGroup defaultValue="male" row style={{paddingLeft:"10px"}}>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>
           
            </Card>
            </FormControl>
            <br/><br/>
            
<FormControl>
                    <InputLabel style={{paddingLeft:"130px"}}>Language</InputLabel>
                    <Select label="Languages" onChange={handleChange}
                    style={{width:"300px",backgroundColor:"#C6EEFA",marginLeft:"100px",borderRadius:"15px",width:"325px",color:"black",height:"62px"}}
                    defaultValue={10}
                   >
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>Tamil</MenuItem>
                        <MenuItem value={30}>Hindi</MenuItem>
                        
                    </Select>
                    </FormControl>

                    <FormControl>
                    <InputLabel style={{paddingLeft:"70px"}}>Department</InputLabel>
                    <Select label="Languages" onChange={handleChange}
                    style={{width:"300px",backgroundColor:"#C6EEFA",marginLeft:"50px",borderRadius:"15px",width:"325px",color:"black",height:"62px"}}
                    defaultValue={10}
                   >
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>Tamil</MenuItem>
                        <MenuItem value={30}>Hindi</MenuItem>
                        
                    </Select>
                    </FormControl>

                    <br/><br/>
                    <span style={{marginLeft:"100px",marginTop:"20px"}}> 
                <Field
                  as={TextField}
                  id="bio"
                  label="Short Biography"
                  name="bio"
                  InputLabelProps={{
                    sx:{color:"black",fontWeight:"semibold"}
                  }}
                  inputProps={{
                    style: {backgroundColor: "#C6EEFA",height:"70px",borderRadius:"15px",width:"677px" }
                  }}
                  helperText={<ErrorMessage name="bio" component={Message} />}
                />
            </span>

                    <br/><br/>
              
              <span style={{ paddingLeft: "370px"}}>
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

export default Doctor;