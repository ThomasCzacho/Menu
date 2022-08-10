import React from 'react';
import dish from './data';
import { Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import makeStyles from '@mui/material/styles/makeStyles';
import "/workspace/Menu/menu/src/index.css";


const styles = {
   borderColor: "#c59d5f",
   container: {
  display: "flex",
  flexFlow: "column wrap",
  gap: "0 30px",
  backgroundColor: "pink",
  height: 1200,
  overflow: "auto"
},
 };

 
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
        <Grid  spacing={2} margin={2} item xs={4} overflow='auto' flexFlow='column-wrap' display='flex'>
  
    <ListItem key={id} style={styles} maxHeight={100} container className='menu-item'>
        

          <Grid width={450} height={100}>
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
          
          
    </ListItem>
    
        </Grid>
        </ThemeProvider>
      );
      })}
      </>
    );
  };
export default Menu;