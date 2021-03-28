import React from 'react'
import { Button, Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core'
import Logo from '../../images/logo-white.png'

const useStyles = makeStyles(theme => ({
  navbar: {
    marginBottom: 50,
  },
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '30px 100px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  barButtons: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0px',
    '& .MuiTypography-subtitle1': {
      color: '#FFFFFF',
      cursor: 'pointer',
      padding: '0px 50px',
    },
    '& .MuiButton-contained': {
      backgroundColor: 'transparent',
      color: "#FFFFFF",
      borderRadius: 40,
      border: '2px solid #FFFFFF',
      padding: '10px 30px'
    },
    '& .MuiButton-label': {
      font: 'normal normal normal 14px/24px Montserrat',
      color: "#FFFFFF",
    }
  },
  offset: theme.mixins.toolbar,
}))

export default function Navbar() {
  const classes = useStyles()

  return (
      <div className={classes.navbar}>
        <AppBar className={classes.appbar}>
         <Toolbar className={classes.toolbar}>
            <div className={classes.image}>
              <img src={Logo} alt="Logo" height='60'/>
            </div>
            <div className={classes.barButtons}>
              <Typography variant='subtitle1'>Fitness</Typography>
              <Typography variant='subtitle1'>Nutrtion</Typography>
              <Typography variant='subtitle1'>Life Coaching</Typography>
              <Button variant="contained">GET STARTED</Button>
            </div>
         </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
      </div>
  );
}
