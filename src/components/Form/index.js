import React, { useState } from 'react'
import { Button, Typography, makeStyles, Card, InputBase, FormControl, Box, Select, MenuItem } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
//import axios from 'axios'

const useStyles = makeStyles(theme => ({
  cardForm: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 30,
    padding: 40,
    [theme.breakpoints.down('sm')]: {
     marginTop: 50,
    },
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
    '& .MuiSelect-icon': {
      color: '#FFFFFF',
      marginRight: 20
    }
  },
  select: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& label': {
      font: 'normal normal 300 15px/19px Montserrat',
      color: '#FFFFFF',
      marginBottom: '10px'
    },
    '& .MuiAutocomplete-root': {
      width: '100%'
    },
    '& .MuiInputBase-root': {
      color: '#FFFFFF',
      backgroundColor: theme.palette.primary.main,
      border: '1px solid #707070',
      borderRadius: 10,
      font: 'normal normal 300 15px/19px Montserrat',
      fontSize: 15,
      padding: '7px 20px',
    },
    '& .MuiAutocomplete-endAdornment': {
      paddingRight: '10px',
    },
    '& .MuiAutocomplete-tag': {
      display: 'none',
    },
    '& .MuiIconButton-root': {
      color: '#FFFFFF',
    }
  },
  autocomplete: {
    marginBottom: '10px',
  },
  option: {
    font: 'normal normal 300 12px/19px Montserrat',
    color: '#312A2A',
    '&:hover': {
      backgroundColor: '#E10C33',
      color: '#FFFFFF',
    }
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
  span:{
    color: '#E10C33'
  }
}))

export default function Form() {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const [clientInfo, setClientInfo] = React.useState({
    name: '',
    lastName: '',
    email: '',
    cellphone: '',
    futureRole: '',
  });

 const handleChange = (event) => {
   setClientInfo({
     ...clientInfo,
     [event.target.name]: event.target.value,
   })
 };

 const sendForm = async (e) => {

   e.preventDefault()

   setError(false)
   setSuccess(false)
   if(
     clientInfo.name.trim() === '',
     clientInfo.lastName.trim() === '',
     clientInfo.email.trim() === '',
     clientInfo.futureRole.trim() === ''
     ){
       setError(true)
      return '';
   }

   try {

     //axios.post('https://api.unitewellness.co/users', clientInfo);

     setSuccess(true)

     setTimeout(() => {
       setSuccess(false)
     }, 3000);

   } catch (error) {

   }



 }



  return (
    <form onSubmit={(e)=>sendForm(e)}>
      <Card className={classes.cardForm}>
        <div className={classes.title}>
          <Typography variant='subtitle2'>Future Member or Coach</Typography>
        </div>
        <div className={classes.input}>
          <FormControl className={classes.formControl}>
            <label htmlFor="name">First Name <span className={classes.span}>*</span></label>
            <InputBase
              id="name"
              name="name"
              inputProps={{ 'aria-label': 'naked' }}
              value={clientInfo.name} onChange={handleChange}
            />
        </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="lastName">Last Name <span className={classes.span}>*</span></label>
            <InputBase
              id="lastName"
              name="lastName"
              inputProps={{ 'aria-label': 'naked' }}
              value={clientInfo.lastName} onChange={handleChange}
            />
        </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="email">Email Address <span className={classes.span}>*</span></label>
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
        </div>
        <div className={classes.select}>
          <FormControl style={{ marginBottom: 0 }} className={classes.formControl}>
            <label htmlFor="role">"Future Member" or "Future Coach" <span className={classes.span}>*</span></label>

            <Select
              value={clientInfo.futureRole}
              onChange={(e)=>setClientInfo({...clientInfo,futureRole: e.target.value})}
              input={<InputBase />}
            >
              <MenuItem value="">
                <em>Select one</em>
              </MenuItem>
              <MenuItem value="member">Member</MenuItem>
              <MenuItem value="coach">Coach</MenuItem>
            </Select>

          </FormControl>
        </div>

        {error && <Box mt={3} mb={3}>
          <Alert severity="error">All marked fields are required</Alert>
        </Box>}

        {success && <Box mt={3} mb={3}>
          <Alert severity="success">Request received</Alert>
        </Box>
        }

        <div style={{ width: '100%', marginTop: 40 }} className={classes.button}>
          <Button
            style={{ width: '100%' }}
            type="submit"
            variant="contained"
          >
            SEND
          </Button>
        </div>
      </Card>
    </form>
  );
}
