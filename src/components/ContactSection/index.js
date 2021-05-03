import React from 'react'
import { makeStyles, Grid, Toolbar } from '@material-ui/core'
import Form from '../Form'
import ContactItem from '../ContactItem'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    marginBottom: 100,
    padding: '0px 100px',
    [theme.breakpoints.down('xs')]: {
     padding: '30px',
    },
  },
  leftTitle: {
    display: 'flex',
    width: '50%',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
     marginBottom: 20,
    },
    '& .MuiTypography-subtitle1': {
      font: 'normal normal normal 40px/50px Montserrat',
      color: '#FFFFFF',
      [theme.breakpoints.down('sm')]: {
       fontSize: '32px',
      },
    },
    flexDirection: 'column',
    color: '#FFFFFF',
    fontSize: '25px',
    lineHeight: '60px',
    [theme.breakpoints.down('sm')]: {
     fontSize: '16px',
     lineHeight: '40px',
    },
    '& h1': {
      margin: 0,
    },
  },
  paragraph: {
    display: 'flex',
    width: '80%',
    '& p': {
      font: 'normal normal 200 18px/28px Montserrat',
      color: '#FFFFFF',
      margin: '25px 0px',
      [theme.breakpoints.down('sm')]: {
       margin: 0,
       fontSize: 14,
      },
    }
  },
  toolbar: {
    padding: 0,
  }
}))

export default function ContactSection() {
  const classes = useStyles()

  const contactInfo = [
    {
      title: 'Address',
      text: 'Menlo Park, California',
    },
    /*{
      title: 'Phone',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    }*/
  ]

  return (
      <Grid container className={classes.content}>
        <Grid item xs={12} md={6}>
            <div className={classes.leftTitle}>
              <h1>We can't spell UniteWellness without U</h1>
              {/*<Typography variant='subtitle1'>We can't spell UniteWellness without U</Typography>*/}
            </div>

            <div className={classes.paragraph}>
              <p>We're excited to get to know you. Please fill out your information to receive updates on our products and services.</p>
            </div>

            {contactInfo.length && contactInfo.map((elem, index) => (
              <ContactItem key={index} title={elem.title} text={elem.text} />
            ))}
        </Grid>

        <Toolbar id="back-to-bottom-anchor" className={classes.toolbar}/>

        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
      </Grid>
  );
}
