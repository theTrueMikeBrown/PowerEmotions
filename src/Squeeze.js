import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './SqueezeGlobal.css';
import { Grid, Box, TextField, FormControl, Button, Link } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({ 
  purple: {
    color: '#571897',
  },
  emphasis: {
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  container: {
    minHeight: '100%',
    position: 'relative',
  },
  page: {    
    margin: '0 auto',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif !important',
    color: '#000',
  },
  maxWidth:{    
    maxWidth: '1300px',
    margin: 'auto',
  },
  header: {
    color: '#fff',
    backgroundColor: 'rgba(87, 24, 151, 0.5)',
    borderBottom: '1px rgb(87, 24, 151) solid',
    boxShadow: '0.00px 4.00px 4px 0px rgba(87,24,151,0.6)',
    fontSize: '1.5em',
    padding: '.5em',
    fontWeight: '700',
  },
  sticky: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1',
    display: 'none',    
    [theme.breakpoints.up(1000)]: {
      display: 'block',
    }
  },
  topBox:
  {
    outline: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'url("Transparent Background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    paddingTop: '1em',
    [theme.breakpoints.up(700)]: { 
      paddingTop: '2em',
      padding: '1.5em',
    },
    [theme.breakpoints.up(1000)]: {
      paddingTop: '5em',
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightImageContainer: {        
    [theme.breakpoints.up(360)]: {
      float: 'right',
      paddingLeft: '1em',  
    },
  },
  shrinkImage: {
    maxWidth: '100%',
    maxHeight: '300px',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    marginBottom: '1em',
    padding: '0px',
    [theme.breakpoints.up(700)]: { 
      maxHeight: '350px',
      padding: '0px',
    },
  },
  imageInnerContainer: {
    maxHeight: '750px'
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
    
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxSizing:'border-box',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '650px',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    marginBottom: '1em',
    padding: '0px',
    [theme.breakpoints.up(700)]: { 
      maxHeight: '750px',
      padding: '0px',
    },
  },

  
  leadIn:
  {
    fontWeight: '700',
    fontSize: '1.25em',
    letterSpacing: '.1em',
    textSizeAdjust: '95%',
    [theme.breakpoints.up(700)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.5em',
    },
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '.75em',
      fontSize: '1.35em',
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2em'
    },
  },
  title:
  {
    fontSize: '2em',
    fontWeight: '700',    
    textSizeAdjust: '100%',
    paddingTop: '0em',
    padding: '.25em',
    [theme.breakpoints.up(325)]: { 
      fontSize: '2.25em',
      padding: '.5em',
      paddingTop: '.75em',
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.25em',
      paddingLeft: '1em',
      paddingRight: '1em',
      paddingTop: '.5em',
    },
    [theme.breakpoints.up(1100)]: {
      fontSize: '2.75em',
    },
  },  
  signUp: {
  },

  whiteBox: {
    background: 'rgba(255,255,255,.3)',
    height: '100%',
  },
  transparentBox: {
    background: 'rgba(255,255,255,0)',
    height: '100%',
  },

  headline: {
    fontSize: '1em',
    fontWeight: '400',
    lineHeight: '1.5em',
    marginBottom: '0px',
    paddingTop: '.1em',
    padding: '.5em',
    position: 'relative',
    maxWidth: '20em',
    margin: 'auto',
    [theme.breakpoints.up(325)]: { 
      padding: '.75em',
      fontSize: '1.25em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '0',
      padding: '1em',
      fontSize: '1.35em',
    },
    [theme.breakpoints.up(1100)]: {
      paddingTop: '.5em',       
      fontSize: '1.5em',
    },
  },

  pinkBanner: {
    background: 'rgba(186,137,236)',
    color: '#fff',
    fontSize: '1.25em',
    fontWeight: '700',
    padding: '0',
    marginBottom: '.5em',
    width: 'auto',
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.5em',
    },
    [theme.breakpoints.up(700)]: { 
      marginRight: '.25em',
      marginLeft: '.25em',
      fontSize: '1.5em',
    },
    [theme.breakpoints.up(1100)]: {
      fontSize: '2em',
      marginRight: '.5em',
      marginLeft: '.5em',
    },
  },

  date:{
    fontSize: '2.25em',
    marginBottom: '1em',
    fontWeight: '700',
    [theme.breakpoints.up(325)]: { 
      fontSize: '2.5em',
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.5em',
      marginBottom: '.25em',
    },
    [theme.breakpoints.up(1100)]: { 
      fontSize: '2.75em',
      paddingTop: '.5em',
    },
  },

  afterText: {
    fontSize: '.75em',
    fontWeight: '700',
    lineHeight: '1.5em',
    paddingTop: '.1em',
    padding: '.5em',
    position: 'relative',
    [theme.breakpoints.up(325)]: { 
      paddingTop: '.25em',
      padding: '.75em',
      fontSize: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '.5em',
      padding: '1em',
      fontSize: '1.25em',
      marginBottom: '1em',
    },
    [theme.breakpoints.up(1000)]: {       
      marginBottom: '2em',
    },
  },
  afterText2: {
    fontSize: '.75em',
    fontWeight: '700',
    lineHeight: '1.5em',
    marginBottom: '3em',
    paddingTop: '.1em',
    padding: '.5em',
    position: 'relative',
    [theme.breakpoints.up(325)]: { 
      paddingTop: '.25em',
      padding: '.75em',
      fontSize: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '.5em',
      marginBottom: '0',
      padding: '1em',
      fontSize: '1.25em',
    },
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em',
      marginBottom: '3em',
    },
  },
  afterText3: {
    fontSize: '.75em',
    fontWeight: '700',
    lineHeight: '1.5em',
    paddingTop: '.1em',
    padding: '.5em',
    position: 'relative',
    [theme.breakpoints.up(325)]: { 
      paddingTop: '.25em',
      padding: '.75em',
      fontSize: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '.5em',
      padding: '1em',
      fontSize: '1.25em',
    },
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em',
    },
  },

  bigishInput: {
    marginRight: '1em',
    marginLeft: '1em',
    fontSize: '1.25em',
  },
  
  bigishInputButton: {
    backgroundColor: 'rgba(255, 217, 228, 1)',
    borderRadius: '.5em',
    textDecoration: 'none',
    marginRight: '.5em',
    marginLeft: '.5em',
    marginTop: '.5em',
    marginBottom: '.5em',
    paddingRight: '.5em',
    paddingLeft: '.5em',
    fontWeight: '600',
    fontSize: '1.25em',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif !important',
    '&:hover': {
      backgroundColor: 'rgb(235, 171, 190)',
      color: "#fff",
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '2em',
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.25em',
    },
    [theme.breakpoints.up(1100)]: { 
      fontSize: '2.5em',
    },
  },

  content: {
    paddingBottom: '4em',
    [theme.breakpoints.up(700)]: { 
      paddingBottom: '3em',
    },
  },

  lifeChangerBox: {
    backgroundColor: 'white',
    padding: '.5em .5em',
    [theme.breakpoints.up(700)]: { 
      padding: '.5em 3em',
    },
    [theme.breakpoints.up(1000)]: { 
      padding: '1em 8em',
    },
  },
  leadIn2: {
    fontSize: '1em',
    marginTop: '1em',
    marginBottom: '2em',
    fontWeight: '800',
    [theme.breakpoints.up(700)]: { 
      fontSize: '1.5em',
    },
  },
  title2: {
    backgroundColor: 'rgba(87, 24, 151, 0.5)',
    border: '1px rgb(87, 24, 151) solid',
    boxShadow: '0.00px 4.00px 4px 0px rgba(87,24,151,0.6)',
    color: '#fff',
    fontSize: '2em',
    fontWeight: '700',
    letterSpacing: '.1em',
    padding: '1em 3em',
    borderRadius: '.75em',
    [theme.breakpoints.up(325)]: { 
      padding: '.5em 1em',
      fontSize: '1.25em',
    },
    [theme.breakpoints.up(700)]: { 
      padding: '.5em 2em',
      fontSize: '2em',
    },
    [theme.breakpoints.up(1100)]: { 
      fontSize: '3em',
    },
  },
  subtitle2: {
    fontSize: '2em',
    fontWeight: '700',
    paddingTop: '1em',
    paddingBottom: '.3em',
    [theme.breakpoints.up(325)]: { 
      paddingTop: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '1em',
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2em',
      paddingBottom: '.75em',
      fontSize: '2.25em',
    },
  },
  marbleTile:{
    backgroundImage:'url(Marble.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    maxWidth: '24em',
    padding: '1em',
    marginTop: '2em',
    lineHeight: '2.5em',
    border: '.25em white solid',
    [theme.breakpoints.up(1100)]: { 
      padding: '1em',
      marginTop: '3em',
      lineHeight: '2.5em',
    },
  },
  itemText: {
    fontSize: '1em',
    fontWeight: '700',
    margin: '.5em',
    marginTop: '0',
    marginBottom: '.25em',
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.25em',
      marginBottom: '.5em',
    },
    [theme.breakpoints.up(700)]: { 
      marginBottom: '2em',
    },
    [theme.breakpoints.up(1100)]: {
      fontSize: '1.75em',
    },
  },
  wideish: {
    padding: '.5em',
    fontSize: '1.5em',
    [theme.breakpoints.up(700)]: {
      padding: '.5em 1em',
    },
    [theme.breakpoints.up(1000)]: {
      padding: '.5em 2em',
      fontSize: '2.25em',
    },
  },
  subText2: {
    fontSize: '.6em',
    fontWeight: '600',
    display: 'block',
  },
  columnHolder: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  hostBox:
  {
    outline: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'url(LightBackground.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '.5em',

    [theme.breakpoints.up(700)]: { 
      padding: '1.5em',
    },
  },

  leadIn3: {
    textAlign: 'right',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '2em',
    letterSpacing: '0.1em',
    paddingRight: '.5em',
    [theme.breakpoints.up(325)]: { 
      fontSize: '2.25em',
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.75em',
    },
    [theme.breakpoints.up(1100)]: { 
      fontSize: '3em',
    },
  },
  hostPicture: {
    maxWidth: '100%',
    [theme.breakpoints.up(325)]: { 
      maxWidth: '90%',
    },
    [theme.breakpoints.up(700)]: { 
      maxWidth: '50%',
    },
  },
  title3: {
    fontSize: '2em',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  subtitle3: {
    fontSize: '1.8em',
    fontWeight: '600',
    fontStyle: 'italic',
    paddingBottom: '.25em',
    [theme.breakpoints.up(700)]: { 
      paddingBottom: '1em',
    },
  },
  text3: {
    textAlign: 'left',
    padding: '.25em',
    fontSize: '1.2em',
    [theme.breakpoints.up(325)]: { 
      padding: '.5em',
      fontSize: '1.3em',
    },
    [theme.breakpoints.up(700)]: { 
      padding: '.75em',
      paddingBottom: '0',
      fontSize: '1.4em',
      paddingTop: '.5em',
    },
    [theme.breakpoints.up(1100)]: { 
      padding: '.75em',
      fontSize: '1.53em',
    },
  },

  footer:
  {
    display: 'block',
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
  },
  link: {
    color: '#000'
  },

  TwoColumns: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  column: {
    margin: '1em',
    flex: '50%',
    [theme.breakpoints.up(700)]: { 
      flex: '45%'
    },
  },
  testimonialsBox: {
    marginTop: '1.5em',
    marginBottom: '1em'
  },
  testimonial: {
    maxWidth: '100%'
  },
}));

export function Squeeze() {
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
        <div className={clsx(classes.sticky, classes.header)}>
          FREE LIVE CHALLENGE: Presented by Alison Brown - Emotional Intelligence + Parenting Specialist
        </div>
        <div className={classes.topBox} id="topBox">
          <Grid container className={classes.maxWidth} justify="space-around">
            <Grid item xs={12} md={7} className={classes.imageContainer}>
              <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "none", md: "block" }}>
                <img src="SqueezeImage.3.jpg" className={classes.image} alt="" tabIndex="0" />
              </Box>            
            </Grid>
            <Grid item xs={12} md={5} className={classes.signUp}>
              <div className={classes.whiteBox}>
                <div className={clsx(classes.leadIn)}>FREE LIVE CHALLENGE</div>                
                <div className={clsx(classes.purple, classes.title)}>HOW TO TRAIN YOUR ANGER DRAGON</div>
                <div className={clsx(classes.headline)}>TRANSFORM A FRUSTRATING DAILY EXPERIENCE INTO A MOMENT OF <span className={clsx(classes.purple, classes.emphasis)}>LOVE</span> AND <span className={clsx(classes.purple, classes.emphasis)}>CONNECTION</span>.</div>
                <div className={clsx(classes.pinkBanner, classes.purple)}>THIS CHALLENGE WILL BE HELD...</div>
                <div className={clsx(classes.date)}>August 24 - 28, 2020</div>
                <form name="submit-to-google-sheet"
                    onSubmit={(e) => {
                      const scriptURL = 'https://script.google.com/macros/s/AKfycbzUlcRsgLhNmkbiHYEGAN50lWuH96LpPzHewcSYy0JY3cv1MVyR/exec'                                       
                      const form = document.forms['submit-to-google-sheet']
                      e.preventDefault()
                        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                          .then(response => { setToThankYou(true) })
                          .catch(error => console.error('Error!', error.message));
                  }}>
                    <FormControl fullWidth>
                      <TextField id="name"  name="name"  label="Your name here..." className={classes.bigishInput}/>
                      <TextField id="email" name="email" label="Your email address here..." className={classes.bigishInput} />
                      <Button type="submit" className={classes.bigishInputButton}>GIVE ME THE CALM!</Button>
                    </FormControl>
                </form>
                <div className={clsx(classes.afterText)}>JOIN THE FREE PROGRAM</div>                
              </div>
            </Grid>
          </Grid>
          <Grid className={clsx(classes.maxWidth, classes.imageContainer)}>
            <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "block", sm: "none" }}>
              <img src="SqueezeImage.3.png" className={classes.image} alt="" tabIndex="0" />
            </Box>            
          </Grid>
        </div>
        <div className={clsx(classes.maxWidth, classes.lifeChangerBox)}>
          <div className={classes.leadIn2}>Imagine you … feeling balanced, in control, and at peace, no matter what behavior your kids throw at you!</div>
          <div className={classes.title2}>HERE ARE 3 WAYS THIS CHALLENGE WILL CHANGE YOUR LIFE FOREVER:</div>          
          <Grid container style={{margin: 0, width: '100%',}} justify="space-around">
            <Grid item xs={12} md={4} className={classes.marbleTile}>
              <div className={clsx(classes.purple, classes.subtitle2)}>Life Changer #1</div>
              <div className={clsx(classes.itemText)}>The ONE THING you need to change to work WITH your anger, instead of against it, so that you respond like your ideal parent.</div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.marbleTile}>
              <div className={clsx(classes.purple, classes.subtitle2)}>Life Changer #2</div>
              <div className={clsx(classes.itemText)}>My simple strategy to get yourself back in the game when your emotions are so strong that you want to give up... letting you achieve that “calm consistency” that all the parenting gurus preach.</div>
            </Grid>
            <Grid item xs={12} md={4} className={classes.marbleTile}>
              <div className={clsx(classes.purple, classes.subtitle2)}>Life Changer #3</div>
              <div className={clsx(classes.itemText)}>My specifically choreographed method to banish mom guilt and spend your time actually enjoying your kids.</div>
            </Grid>
          </Grid>
          <Button className={clsx(classes.bigishInputButton, classes.wideish)} href="#topBox">
              I WANT TO UP-LEVEL MY PARENTING!
          </Button>
          <div className={classes.afterText2}>JOIN THE FREE CHALLENGE</div>
        </div>
        <div className={classes.content}></div>

        <div className={classes.hostBox}>
          <Grid container className={classes.maxWidth} justify="space-around">
            <Grid item xs={12} md={7} className={classes.signUp}>
              <div className={classes.transparentBox}>
              <Grid className={clsx(classes.rightImageContainer)}>
                  <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "block", md: "none" }}>
                    <img src="hostPicture.png" className={classes.shrinkImage} alt="" tabIndex="0" />
                  </Box>            
                </Grid>
                <div className={clsx(classes.purple, classes.leadIn3)}>ABOUT</div>
                <div className={clsx(classes.purple, classes.leadIn3)}>YOUR HOST</div>
                <div className={classes.text3}>Hey, I’m Alison.</div>
                <div className={classes.text3}>I used to think of myself as a pretty good mom. Then I had three bouts of debilitating prenatal depression.</div>
                <div className={classes.text3}>After my last baby was born and the depression lifted, I thought that my emotional responses were permanently broken. I found myself alternately yelling at my kids or withdrawing from them to try to keep myself from yelling.</div>
                <div className={classes.text3}>I wasn’t willing to live like that, so I embarked on a massive search for something - anything - that could help me.</div>
                <div className={classes.text3}>What I found was completely counterintuitive: the key to being the mom I wanted to be lay in the anger, sadness, and fear I had been attempting to fight!</div>
                <div className={classes.text3}>I ended up building my own Power Emotions system to take the little-known concepts I uncovered and make them easily accessible to busy moms. The Power Emotions system changed my life, and now it’s helping mom all over transform their experience of motherhood.</div>
                <Button type="submit" className={classes.bigishInputButton} href="#topBox">I WANT A TRANSFORMATION!</Button>
                <div className={clsx(classes.afterText3)}>JOIN THE FREE CHALLENGE</div>         
              </div>
            </Grid>
            <Grid item xs={12} md={5} className={classes.imageContainer}>
              <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "none", md: "block" }}>
                <img src="hostPicture.png" className={clsx(classes.image)} alt="" tabIndex="0" />
              </Box>            
            </Grid>
          </Grid>
        </div>

        <div className={clsx(classes.maxWidth, classes.testimonialsBox)}>
          <div className={classes.TwoColumns}>
            <div className={classes.column}><img className={classes.testimonial} src="t4.jpg"/></div>
            <div className={classes.column}><img className={classes.testimonial} src="t5.jpg"/></div>
          </div>
          <div className={classes.TwoColumns}>
            <div className={classes.column}><img className={classes.testimonial} src="t3.jpg"/></div>
          </div>
          <div className={classes.TwoColumns}>
            <div className={classes.column}><img className={classes.testimonial} src="t1.jpg"/></div>
            <div className={classes.column}><img className={classes.testimonial} src="t2.jpg"/></div>
          </div>
          <Button type="submit" className={classes.bigishInputButton} href="#topBox">ARE YOU READY FOR HAPPY MOMMING?</Button>
          <div className={clsx(classes.afterText3)}>JOIN THE FREE CHALLENGE</div>
        </div>
        <div className={clsx(classes.maxWidth, classes.content)}>Disclaimer: This program is entirely free and will give you actionable steps that you can use to change your parenting. At the end of the free program, a larger program will be offered for purchase.</div>
        <div className={classes.footer}><span>AlisonPBrown.com</span><span> - All Rights Reserved - </span><span><Link className={classes.link} href="/privacy-policy">Privacy Policy</Link></span></div>
      </div>
    </div>
  );
}
