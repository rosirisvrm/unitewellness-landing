import React from 'react'
import { Button, makeStyles, Grid } from '@material-ui/core'
import Phones from '../../images/phones.png'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    padding: '0px 100px',
    marginBottom: 200,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '40px',
    lineHeight: '75px',
    textTransform: 'uppercase',
    '& h1': {
      margin: 0,
    },
    '& span': {
      color: '#E10C33',
    }
  },
  paragraph: {
    '& p': {
      margin: '40px 0px',
      font: 'normal normal 200 18px/30px Montserrat',
      color: '#FFFFFF',
    }
  },
  button: {
    '& .MuiButton-contained': {
      backgroundColor: theme.palette.secondary.main,
      color: "#FFFFFF",
      borderRadius: 40,
      padding: '10px 50px'
    },
    '& .MuiButton-label': {
      font: 'normal normal normal 14px/24px Montserrat',
      color: "#FFFFFF",
    }
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '480px',
    height: '550px',
  },
}))

export default function FirstSection() {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Grid item xs={12} md={6} className={classes.text}>

        <div className={classes.title}>
          <h1><span>Live</span> Your Best Life</h1>
        </div>

        <div className={classes.paragraph}>
          <p>A community that insires individuals to be the best versions of themselves.</p>
        </div>

        <div className={classes.button}>
          <Button variant="contained">GET STARTED</Button>
        </div>

      </Grid>
      <Grid item xs={12} md={6} className={classes.image}>
        <img src={Phones} alt="Phones" className={classes.img}/>
      </Grid>
    </div>
  )
}
