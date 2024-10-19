import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Typography, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; 

import logo from "../../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate('/pages/login/login3'); 
  };

  const handleSignupClick = () => {
    navigate('/pages/register/register3'); 
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', zIndex: 10, boxShadow: 'none' }}>
        <Toolbar 
          sx={{
            width: { xs: '100%', md: '65%' },
            margin: '0 auto',
            justifyContent: 'space-between',
            border: { xs: 'none', md: '1px #C0C5CD solid' },
            borderRadius: { xs: '0px', md: '20px' }, 
          }}
        >
          
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" style={{ width: '120px' }} />
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 2, justifyContent: 'center', gap: '20px', alignItems: 'center', color: 'black' }}>
            <Button color="inherit">Hero</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Contact Us</Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px', alignItems: 'center' }}>
            <Button onClick={handleSignupClick} variant="contained" sx={{ backgroundColor: '#1E88E5', color: 'white', padding: '2px', borderRadius: '15px' }}>Signup</Button>
            <Button onClick={handleLoginClick} sx={{ color: '#1E88E5' }}>Login</Button>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon className="text-[#1565C0] font-bold" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', top: '64px', width: '100%', zIndex: 9 }}
      >
        <Box sx={{ backgroundColor: 'white', textAlign: 'center', padding: '10px 0', boxShadow: 'none' }}>
          {['Hero', 'Features', 'Pricing'].map((text) => (
            <Button key={text} color="inherit" sx={{ display: 'block', width: '100%' }}>
              {text}
            </Button>
          ))}
        </Box>
      </Collapse>
    </>
  );
}

export default Navbar;
