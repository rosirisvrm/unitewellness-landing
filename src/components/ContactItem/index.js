import React from 'react'
import { Typography, makeStyles, Grid, Fab } from '@material-ui/core'
import Calling from '../../images/Calling.svg'
import Location from '../../images/Location.svg'

const useStyles = makeStyles(theme => ({
  contact: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    paddingTop: 50,
    [theme.breakpoints.down('sm')]: {
     paddingTop: 20,
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
     justifyContent: 'center',
    },
  },
  icon: {
    padding: 35,
    cursor: 'default',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#E10C33',
    }
  },
  textContact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 40,
    [theme.breakpoints.down('sm')]: {
     marginLeft: 20,
     paddingTop: 15,
    },
    [theme.breakpoints.down('xs')]: {
     marginLeft: 0,
     paddingTop: 15,
     alignItems: 'center',
    },
    '& .MuiTypography-subtitle2': {
      font: 'normal normal normal 23px/30px Montserrat',
      color: '#E10C33',
      marginBottom: 15,
    },
    '& .MuiTypography-body2': {
      font: 'normal normal 200 14px/24px Montserrat',
      color: '#FFFFFF',
    },
  },
}))

export default function ContactItem({ title, text }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.contact}>

      <Grid item xs={12} sm={2} className={classes.iconContainer}>
        <Fab color="secondary" aria-label="scroll back to top" className={classes.icon}>
          <img src={Location} alt={title} width='28px' height='28px' />
        </Fab>
      </Grid>

      <Grid item xs={12} sm={8} className={classes.textContact}>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography variant='body2'>{text}</Typography>
      </Grid>

    </Grid>
  );
}
