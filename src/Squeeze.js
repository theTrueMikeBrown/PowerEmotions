import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './SqueezeGlobal.css';
import { Grid, Box, TextField, FormControl, Button, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({ 
  container: {    
    minHeight: '100%',
    position: 'relative',
  },
  page: {
    paddingTop: '1em',
  },
  leadIn:
  {
    fontFamily: '"Libre Baskerville italic", Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '700',
    letterSpacing: '.15em',
    textSizeAdjust: '95%',
    [theme.breakpoints.up(325)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.1em',
      marginTop: '1em',
    },
  },
  hr:
  {
    border: '0px',
    height: '1em',
    display: 'block',
    backgroundImage: 'url(\\hr.png)',
    maxWidth: theme.spacing(82),
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.up(700)]: { 
      height: '2em',
    },
  },
  title:
  {
    fontFamily: 'Poppins, Helvetica, sans-serif',
    fontSize: '1.5em',
    fontWeight: '500',
    letterSpacing: '.05em',
    textSizeAdjust: '100%',
    textTransform: 'uppercase',
    padding: '1em',
    paddingTop: '0em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.25em !important',
      padding: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      paddingTop: '1em',
    },
  },  
  box:
  {
    outline: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'url(\\SqueezeBox.jpg)',
    backgroundSize: 'cover',
    paddingBottom: '2em',
    [theme.breakpoints.up(325)]: { 
      paddingTop: '2em',
    },
  },
  innerBox: {
    width: '1170px',
    maxWidth: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  innererBox: {    
    margin: '0px auto',
    outline: 'none',
    width: '90%',
    maxWidth: '100%',
    padding: '35px 20px 40px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxSizing:'border-box',
    lineHeight:'20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    boxSizing: 'border-box',
    padding: '0px',
    border: '3px solid #FFF',
    verticalAlign: 'middle',
  },

  signUp: {
  },

  headline: {
    textAlign: 'left',
    color: 'rgb(45, 45, 45)',
    fontSize: '18px',
    lineHeight: '1.5em',
    marginBottom: '0px',
    padding: '1em',
    paddingTop: '1em',
    position: 'relative',
    [theme.breakpoints.up(800)]: { 
      paddingTop: '3em',
    },
  },

  bigishInput: {
    marginRight: '1em',
    marginLeft: '1em',
  },
  
  button: {
    border: '3px solid rgb(45, 45, 45)',
    color: 'rgb(45, 45, 45)',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    textDecoration: 'none',
    marginRight: '2em',
    marginLeft: '2em',    
    marginTop: '2em',    
  },

  content: {
    paddingBottom: '4em',
    [theme.breakpoints.up(700)]: { 
      paddingBottom: '3em',
    },
  },

  foo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foo2: {
    maxHeight: '400px'
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
  document.body.style.backgroundImage = "url(/Squeeze.jpg)";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundSize = "cover";


  const [toThankYou, setToThankYou] = useState(false);
  const classes = useStyles();

  var fbq = window.fbq || (() => {});
  if (toThankYou === true) {
    fbq('track', 'CompleteRegistration');
    return <Redirect to='/thank-you' />
  }

  return (
    <div className={classes.container}>
      <div className={classes.page}>
        <div className={classes.leadIn}><b><i>Ready to Burnout-Proof Your Parenting Experience?</i></b></div>
        <hr className={classes.hr} />
        <div className={classes.title}>THE <b>REAL SECRET</b> TO SPENDING ALL DAY WITH YOUR KIDS <b>AND STAYING SANE</b></div>
        <div className={classes.box}>
          <Grid container style={{margin: 0, width: '100%',}} justify="space-around">
            <Grid item xs={12} sm={6} className={classes.foo}>
              <Box component={Grid} className={classes.foo2} item xs={12} display={{ xs: "none", sm: "block" }}>
                <img src="SqueezeImage.jpg" className={classes.image} alt="" tabIndex="0" />
              </Box>            
            </Grid>
            <Grid item xs={12} sm={6} className={classes.signUp}>
              <div className={classes.headline}>
                Join the <b>FREE Jumpstart</b> and unlock your emotional superpowers to <b><u>connect with your kids!</u></b>
              </div>
              <form name="submit-to-google-sheet"
                onSubmit={(e) => {
                  const scriptURL = 'https://script.google.com/macros/s/AKfycbwKuMfr_qpnM7vb6K2YF8GnrdGEkiRegLJSjdSkmDRZb47Nu-XR/exec'
                  const form = document.forms['submit-to-google-sheet']
                  e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                      .then(response => setToThankYou(true))
                      .catch(error => console.error('Error!', error.message));
              }}>
                <FormControl fullWidth>
                  <TextField id="name"  name="name"  label="Enter your name nere" className={classes.bigishInput}/>
                  <TextField id="email" name="email" label="Enter your email address" className={classes.bigishInput} />
                  <Button type="submit" className={[classes.bigishInput, classes.button]}>Yes, SIGN ME UP!</Button>
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </div>
        <div className={classes.content}></div>
        <div className={classes.footer}><b>AlisonPBrown.com</b><span> - All Rights Reserved - </span><span><Link href="/privacy-policy">Privacy Policy</Link></span></div>
      </div>
    </div>
  );
}

export default ThankYou;