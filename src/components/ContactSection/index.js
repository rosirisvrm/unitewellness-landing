import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core'
import Form from '../Form'
import ContactItem from '../ContactItem'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    marginBottom: 100,
    padding: '0px 100px',
  },
  leftTitle: {
    display: 'flex',
    width: '50%',
    marginBottom: 40,
    '& .MuiTypography-subtitle1': {
      font: 'normal normal normal 40px/50px Montserrat',
      color: '#FFFFFF',
    }
  },
  paragraph: {
    display: 'flex',
    width: '80%',
    '& p': {
      font: 'normal normal 200 18px/28px Montserrat',
      color: '#FFFFFF',
      margin: '25px 0px',
    }
  },
}))

export default function ContactSection() {
  const classes = useStyles()

  const contactInfo = [
    {
      title: 'Adress',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      title: 'Phone',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    }
  ]

  return (
      <Grid container className={classes.content}>
        <Grid item xs={12} md={6}>
            <div className={classes.leftTitle}>
              <Typography variant='subtitle1'>We can't spell UniteWellness without U</Typography>
            </div>

            <div className={classes.paragraph}>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>

            {contactInfo.length && contactInfo.map((elem, index) => (
              <ContactItem key={index} title={elem.title} text={elem.text} />
            ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
      </Grid>
  );
}
