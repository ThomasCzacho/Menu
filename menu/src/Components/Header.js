import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Link from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  borderColor: '#ffed00',
  palette: {
    primary: {
      main: '#102b42',
      darker: '#E3000B',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c59d5f',
      darker: '#ffed00',
    },
    paypal: {
      main: '#00457C',
      darker: '#ffed00',
    },
    borderColor: '#ffed00',
  },
})

const Header = () => {
  return (
    
    <Stack>
      <ThemeProvider theme={theme}>
    <Typography align='center' variant="h4" color="primary">Our Menu</Typography>
    </ThemeProvider>
    <Grid alignSelf='center' width={80}>
    <Box alignSelf='center'
    sx={{
      width: 90,
      height: 4,
      backgroundColor: '#c59d5f' }} />
    </Grid>
    
    <Grid alignSelf='center'>
    <Stack direction='row' align="center">
      <Button >All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Shakes</Button>
    
    
    </Stack>
    </Grid>
    <Divider />
    </Stack>
    

 
    )
};



export default Header;