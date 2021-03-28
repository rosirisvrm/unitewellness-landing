import React from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core'

import Logo from '../../images/logo-white.png'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px 100px',
    [theme.breakpoints.down('sm')]: {
     padding: '30px 50px',
    },
    '& .MuiTypography-caption': {
      font: 'normal normal 300 14px/24px Montserrat',
      color: '#FFFFFF',
    }
  },
  image: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
     justifyContent: 'center',
     paddingBottom: 20,
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
     justifyContent: 'center',
    },
  }
}))

export default function Landing() {
  const classes = useStyles()

  return (
      <Grid container className={classes.footer}>
        <Grid item xs={12} md={6} className={classes.image}>
          <img src={Logo} alt="Logo" height='50' />
        </Grid>
        <Grid item xs={12} md={6} className={classes.text}>
          <Typography variant='caption'>Copyright © 2021. UniteWellness All rights reserved.</Typography>
        </Grid>
      </Grid>
  );
}
