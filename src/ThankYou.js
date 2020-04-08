import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './ThankYouGlobal.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({ 
  title:
  {
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '1.5em',
    fontWeight: '500',
    letterSpacing: '.05em',
    textSizeAdjust: '100%',
    textTransform: 'uppercase',
    padding: '1.5em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '3em !important'
    },
    [theme.breakpoints.up(325)]: { 
      paddingTop: '2em',
    },
    [theme.breakpoints.up(400)]: { 
      paddingTop: '3em'
    }
  },  
  text: {    
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    letterSpacing: '.05em',
    textSizeAdjust: '100%',
    padding: '1em',
    paddingBottom: '2em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2em !important'
    },
    [theme.breakpoints.up(400)]: { 
      paddingTop: '3em'
    }
  },
  button:
  {
    color: 'darkblue',
    backgroundColor: 'orange',
    fontWeight: '700',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2em !important'
    },
  },
  closing:
  {
    fontFamily: '"Libre Baskerville italic", Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '700',
    letterSpacing: '.15em',
    textSizeAdjust: '95%',
    paddingTop: '2em',
    [theme.breakpoints.up(325)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.1em',
      marginTop: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2em !important'
    },
  },
  footer:
  {
    display: 'block',
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '1em',
    marginTop: '1.25em',
    marginBottom: '.25em',
    overflowWrap: 'break-word',
    padding: '0',
    textSizeAdjust: '100%',

    height: '3em',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '1em',
    paddingRight: '1em',
    [theme.breakpoints.up(700)]: { 
      height: '2em',
    },
  }
}));

function ThankYou() {
  document.body.style.backgroundImage = "url(/ThankYou.jpg)";
  document.body.style.backgroundSize = "cover";
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.title}>YAY!  YOU’RE IN!</div>
      <div className={classes.text}>
        All the action is happening in the Facebook group:       
      </div>
      <Button
          href="https://www.facebook.com/groups/642313606595930/?__xts__[0]=31.[1278465222%2C%22intro_card%22%2C%7B%7D]"
          variant="contained"
          color="primary"
          className={classes.button}>Join now</Button>
      <div className={classes.closing}>I’ll see you there!</div>
      <div className={classes.footer}><b>alisonpbrown.com</b> - All Rights Reserved - Terms &amp; Conditions</div>
    </div>
  );
}

export default ThankYou