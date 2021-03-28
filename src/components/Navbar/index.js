import React from 'react'
import { Button, Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import Logo from '../../images/logo-white.png'

const useStyles = makeStyles(theme => ({
  navbar: {
  },
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '30px 100px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  barButtons: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0px',
    '& .MuiTypography-subtitle1': {
      color: '#FFFFFF',
      cursor: 'pointer',
      padding: '0px 50px',
    },
    '& .MuiButton-contained': {
      backgroundColor: 'transparent',
      color: "#FFFFFF",
      borderRadius: 40,
      border: '2px solid #FFFFFF',
      padding: '10px 30px'
    },
    '& .MuiButton-label': {
      font: 'normal normal normal 14px/24px Montserrat',
      color: "#FFFFFF",
    }
  },
  offset: theme.mixins.toolbar,
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <Slide direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


export default function Navbar(props) {
  const classes = useStyles()

  return (
      <div className={classes.navbar}>
        <HideOnScroll {...props}>
          <AppBar className={classes.appbar}>
           <Toolbar className={classes.toolbar}>
              <div className={classes.image}>
                <img src={Logo} alt="Logo" height='60'/>
              </div>
              <div className={classes.barButtons}>
                <Typography variant='subtitle1'>Fitness</Typography>
                <Typography variant='subtitle1'>Nutrtion</Typography>
                <Typography variant='subtitle1'>Life Coaching</Typography>
                <Button variant="contained">GET STARTED</Button>
              </div>
           </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <div className={classes.offset}></div>
      </div>
  );
}
