import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './ThankYouGlobal.css';

const useStyles = makeStyles(theme => ({ 
  title:
  {
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '2em',
    fontWeight: '700',
    letterSpacing: '.15em',
    textSizeAdjust: '100%',
    textTransform: 'uppercase',
    marginTop: '2em',
  },  
  subtitle:
  {
    display: 'block',
    fontFamily: '"Libre Baskerville", Helvetica, sans-serif',
    fontSize: '1.25em',
    height: '2em',
    marginTop: '.5em',
    padding: '0',
    position: 'relative',
    textSizeAdjust: '100%',
  },
  footer:
  {
    display: 'block',
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '1em',
    marginBottom: '.25em',
    marginTop: '0',
    overflowWrap: 'break-word',
    padding: '0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textSizeAdjust: '100%',
  }
}));

function ThankYou() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.title}>Congrats - Order Complete!</div>
      <div className={classes.subtitle}>Below you can find all the products you purchased...</div>
      <div className={classes.footer}><b>alisonpbrown.com</b> - All Rights Reserved - Terms &amp; Conditions</div>
    </div>
  );
}

export default ThankYou