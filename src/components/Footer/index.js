import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import Logo from '../../images/logo-white.png'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 100px',
    '& .MuiTypography-caption': {
      font: 'normal normal 300 14px/24px Montserrat',
      color: '#FFFFFF',
    }
  }
}))

export default function Landing() {
  const classes = useStyles()

  return (
      <div className={classes.footer}>
        <img src={Logo} alt="Logo" height='50' />
        <Typography variant='caption'>Copyright © 2021. UniteWellness All rights reserved.</Typography>
      </div>
  );
}
