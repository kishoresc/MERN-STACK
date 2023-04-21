import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handle = () => {
    navigate('/log')
  };

  const handleC = () => {
    navigate('/patient')
  };

  const navigate = useNavigate();
  const Home = () => {
    navigate('/')
  }

  return (
    
      <Toolbar style={{backgroundColor:"#202D57",position:"-webkit-sticky"}}>
  
          <Typography sx={{ fontFamily: "'Roboto Condensed',Arial,sans-serif", fontSize: "30px", color: "white", fontWeight: "bold", letterSpacing: "2px" , flexGrow: 1 }} variant="h6" component="div"  Click={() => Home()}>
            LOGO
          </Typography>
  

        <Link sx={{ textDecoration: "none" }} to="/"><Button sx={{ fontFamily: "Bahnschrift Condensed", color: "white", mr: 6 }} >HOME</Button></Link>
        <Link sx={{ textDecoration: "none" }} to="/blog"><Button sx={{ fontFamily: "Bahnschrift Condensed", color: "white",mr: 6}}>CONTACT US</Button></Link>
        <Link sx={{ textDecoration: "none" }} to="/jo"><Button sx={{ fontFamily: "Bahnschrift Condensed", color: "white", mr: 6 }} >ABOUT US</Button></Link>

       <PersonIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{  fontSize: "17px", color: "white" }}
     />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handle}>Login</MenuItem>
        <MenuItem onClick={handleC}>Register</MenuItem>
      </Menu>
  
      
      </Toolbar>

    
        
  );
}