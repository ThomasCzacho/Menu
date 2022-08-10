import React from 'react';
import dish from './data';
import { Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const styles = { borderColor: "#c59d5f", };

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


const Menu = ({menu}) => {
    return (
      <>
      {dish.map((dish)=>{
          const {id, title, categroy, price, src, desc}=dish;
      
      return (
        <ThemeProvider theme={theme}>
        <Grid container spacing={2} margin={4} item xs={4}>
        <article key={id} className="dish" margin={2}>
          <Grid width="400" height="110">
          <Stack direction='row' spacing={2}> 
          <img src={src} alt={title} width="150" height="100" border={4} style={styles}/>
          <Stack direction='column'>
          <Stack direction='row' spacing={6}>
              
  <Grid item xs={9}>
      <Typography align='left' color="primary"  margin={0}>{title}</Typography>
  </Grid>
  <Grid item xs={3}>
      <Typography color="secondary" align='right'>${price}</Typography> 
  </Grid>
                
          </Stack>
          <Divider />
          <h6>{desc}</h6>
          </Stack>
          </Stack>
          </Grid>
        </article>
        </Grid>
        </ThemeProvider>
      );
      })}
      </>
    );
  };
export default Menu;