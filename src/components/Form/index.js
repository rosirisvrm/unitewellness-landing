import React from 'react'
import { Button, Typography, makeStyles, Card, InputBase, FormControl, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';

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
   setClientInfo({
     ...clientInfo,
     [event.target.name]: event.target.value,
   })
 };

 const [role, setRole] = React.useState({});

 const options = [
   {label: 'Member', value: '1'},
   {label: 'Coach', value: '2'},
 ]

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
      </div>
      <div className={classes.select}>
        <FormControl className={classes.formControl}>
          <label htmlFor="role">"Future Member" or "Future Coach"</label>
          <Autocomplete
            className={classes.autocomplete}
            classes={{
                option: classes.option
            }}
            value={role}
            onChange={(event, newValue) => {
              setRole(newValue);
            }}
            getOptionLabel={(option) => option.label}
            disableClearable
            id="role"
            options={options}
            renderInput={(params) =>
              <TextField {...params} placeholder="Select" variant='filled' />
            }
          />
        </FormControl>
      </div>
      <div className={classes.button}>
        <Button variant="contained">SEND</Button>
      </div>
    </Card>
  );
}
