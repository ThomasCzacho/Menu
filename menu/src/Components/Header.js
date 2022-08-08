import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const sections = [
    { title: 'Home Page', url: '#' },
    { title: 'Second Page', url: '#' },
    { title: 'Third Page', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

const Header = () => {
  return (
    <Header title="Our Menu" sections={sections} />,
  <AppBar
        align="center"
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: 'relative',
          borderTop: (t) => `1px solid ${t.palette.divider}`,
        }}
        >
    Our Menu
    <Toolbar align="center">
    
    
    </Toolbar>
    </AppBar>
    )
};

export default Header;