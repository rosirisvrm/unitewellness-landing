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
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
       fontSize: '32px',
      },
    },
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    fontSize: '20px',
    lineHeight: '40px',
    margin: '40px 40px 0px 60px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
     fontSize: '16px',
     margin: '40px 40px 0px 100px',
    },
    [theme.breakpoints.down('sm')]: {
     fontSize: '16px',
     margin: '0px 20px 0px 0px',
    },
    '& h1': {
      margin: 0,
    },
  },
  titleInitial: {
    '& h2': {
      margin: 0,
      color: '#FFFFFF',
      font: 'normal normal 400 40px/50px Montserrat',
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
       fontSize: '32px',
      },
    },
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    fontSize: '20px',
    lineHeight: '40px',
    margin: '40px 40px 0px 60px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
     fontSize: '16px',
     margin: '40px 40px 0px 0px',
    },
    [theme.breakpoints.down('sm')]: {
     fontSize: '16px',
     margin: '0px 20px 0px 0px',
    },
    '& h1': {
      margin: 0,
    },
  },
  paragraph: {
    '& p': {
      font: 'normal normal 200 18px/30px Montserrat',
      color: '#FFFFFF',
      margin: '60px',
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        margin: '20px 30px 0px 100px',
      },
      [theme.breakpoints.down('sm')]: {
       fontSize: 14,
       margin: '20px 30px 30px 0px',
      },
    }
  },
  paragraphInitial: {
    '& p': {
      font: 'normal normal 200 18px/30px Montserrat',
      color: '#FFFFFF',
      margin: '60px',
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        margin: '20px 60px 0px 0px',
      },
      [theme.breakpoints.down('sm')]: {
       fontSize: 14,
       margin: '20px 30px 30px 0px',
       font: 'normal normal 200 18px/24px Montserrat',
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
    width: '550px',
    height: '475px',
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
        <Grid item xs={12} md={5} className={classes.text}>
          <div className={classes.title}>
            <h1>{title}</h1>
          </div>
          <div className={classes.paragraph}>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </Grid>
      </>)}

      {textFirst && (<>
        <Grid item xs={12} md={5} className={classes.text}>
          <div className={classes.titleInitial}>
            <h1>{title}</h1>
          </div>
          <div className={classes.paragraphInitial}>
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
