import React from 'react'
import { Button, Typography, makeStyles, Card, InputBase, FormControl } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cardForm: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    padding: 40,
  },
  title: {
    display: 'flex',
    width: '100%',
    marginBottom: 50,
    '& .MuiTypography-subtitle2': {
      font: 'normal normal 400 25px/40px Montserrat',
      color: '#FFFFFF',
    }
  },
  input: {
    display:'flex',
    flexDirection: 'column',
    width: '100%',
    '& label': {
      font: 'normal normal 300 15px/19px Montserrat',
      color: '#FFFFFF',
      marginBottom: '10px'
    },
    '& .MuiInputBase-root':{
      color: '#FFFFFF',
      backgroundColor: theme.palette.primary.main,
      border: '1px solid #707070',
      borderRadius: 10,
      font: 'normal normal 300 15px/19px Montserrat',
      fontSize: 15,
      padding: '7px 20px',
    }
  },
  formControl: {
    marginBottom: 30,
  },
  button: {
    display: 'flex',
    width: '50%',
    '& .MuiButton-contained': {
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
      color: "#FFFFFF",
      borderRadius: 40,
      padding: '15px 50px'
    },
    '& .MuiButton-label': {
      font: 'normal normal normal 14px/24px Montserrat',
      color: "#FFFFFF",
    }
  },
}))

export default function Form() {
  const classes = useStyles()

  const [clientInfo, setClientInfo] = React.useState({
    name: '',
    lastName: '',
    email: '',
    cellphone: '',
    futureRole: '',
  });

 const handleChange = (event) => {
   console.log('event name: ', event.target.name);
   console.log('event value: ', event.target.value);
   setClientInfo({
     ...clientInfo,
     [event.target.name]: event.target.value,
   })
 };

  return (
    <Card className={classes.cardForm}>
      <div className={classes.title}>
        <Typography variant='subtitle2'>Future Member or Coach</Typography>
      </div>
      <div className={classes.input}>
        <FormControl className={classes.formControl}>
          <label htmlFor="name">First Name</label>
          <InputBase
            id="name"
            name="name"
            inputProps={{ 'aria-label': 'naked' }}
            value={clientInfo.name} onChange={handleChange}
          />
       </FormControl>
        <FormControl className={classes.formControl}>
          <label htmlFor="lastName">Last Name</label>
          <InputBase
            id="lastName"
            name="lastName"
            inputProps={{ 'aria-label': 'naked' }}
            value={clientInfo.lastName} onChange={handleChange}
          />
       </FormControl>
        <FormControl className={classes.formControl}>
          <label htmlFor="email">Email Address</label>
          <InputBase
            id="email"
            name="email"
            inputProps={{ 'aria-label': 'naked' }}
            value={clientInfo.email} onChange={handleChange}
          />
       </FormControl>
        <FormControl className={classes.formControl}>
          <label htmlFor="cellphone">Cellphone</label>
          <InputBase
            id="cellphone"
            name="cellphone"
            inputProps={{ 'aria-label': 'naked' }}
            value={clientInfo.cellphone} onChange={handleChange}
          />
       </FormControl>
       <div className={classes.button}>
         <Button variant="contained">SEND</Button>
       </div>
      </div>
    </Card>
  );
}
