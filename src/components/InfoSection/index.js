import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import Streaming from '../../images/streaming.png'
import Streaming2 from '../../images/streaming2.png'
import Streaming3 from '../../images/streaming3.png'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    padding: '0px 100px',
    marginBottom: 200,
    [theme.breakpoints.down('sm')]: {
     marginBottom: 100,
    },
    [theme.breakpoints.down('xs')]: {
     marginBottom: 100,
     padding: '30px',
    },
  },
  text:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    '& h2': {
      margin: 0,
      color: '#FFFFFF',
      font: 'normal normal 400 40px/50px Montserrat',
      [theme.breakpoints.down('sm')]: {
       fontSize: '32px',
      },
    },
  },
  paragraph: {
    '& p': {
      font: 'normal normal 200 18px/24px Montserrat',
      color: '#FFFFFF',
      margin: '25px 0px',
      [theme.breakpoints.down('xs')]: {
       fontSize: 14,
      },
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
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
    },
  },
  img: {
    width: '500px',
    height: '425px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '225px',
    },
  },
}))

export default function InfoSection({ textFirst, title, text1, text2 }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.content}>

      {!textFirst && (<>
        <Grid item xs={12} md={6} className={classes.image}>
          <img
            src={title === 'Fitness' ? Streaming :
                 title === 'Nutrition' ? Streaming2 : Streaming3}
            alt={title}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.text}>
          <div className={classes.title}>
            <h2>{title}</h2>
          </div>
          <div className={classes.paragraph}>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </Grid>
      </>)}

      {textFirst && (<>
        <Grid item xs={12} md={6} className={classes.text}>
          <div className={classes.title}>
            <h2>{title}</h2>
          </div>
          <div className={classes.paragraph}>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.image}>
          <img
            src={title === 'Fitness' ? Streaming :
                 title === 'Nutrition' ? Streaming2 : Streaming3}
            alt={title}
            className={classes.img}
          />
        </Grid>
      </>)}

    </Grid>
  );
}
