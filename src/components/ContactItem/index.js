import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core'
import Calling from '../../images/Calling.svg'
import Location from '../../images/Location.svg'

const useStyles = makeStyles(theme => ({
  contact: {
    display: 'flex',
    width: '90%',
    paddingTop: 50,
  },
  icon: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '90px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
  },
  textContact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 40,
    '& .MuiTypography-subtitle2': {
      font: 'normal normal normal 23px/30px Montserrat',
      color: '#E10C33',
      marginBottom: 15,
    },
    '& .MuiTypography-body2': {
      font: 'normal normal 200 14px/24px Montserrat',
      color: '#FFFFFF',
    },
  }
}))

export default function ContactItem({ title, text }) {
  const classes = useStyles()

  return (
    <div className={classes.contact}>
      <Grid item xs={12} md={2}>
        <div className={classes.icon}>
          <img src={title === 'Adress' ? Location : Calling} alt={title} width='40px' height='40px' />
        </div>
      </Grid>

      <Grid item xs={12} md={10} className={classes.textContact}>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography variant='body2'>{text}</Typography>
      </Grid>
    </div>
  );
}
