import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './SqueezeGlobal.css';
import { Grid, Box, TextField, FormControl, Button, Link } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({ 
  pink: {
    color: '#c04899',
  },
  purple: {
    color: '#8224e3',
  },
  cyan: {    
    color: '#44c4d7',
  },
  emphasis: {
    textTransform: 'uppercase',
  },
  container: {
    minHeight: '100%',
    position: 'relative',
  },
  page: {    
    margin: '0 auto',
    maxWidth: '1200px',
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
  topBox:
  {
    fontFamily: "Lora, 'Playfair Display', serif",
    outline: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'url(Background.jpg)',
    backgroundSize: 'cover',

    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

    [theme.breakpoints.up(700)]: { 
      padding: '1.5em',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInnerContainer: {
    maxHeight: '400px'
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
    maxHeight: '300px',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    border: '.5em solid #8224e3',
    borderRadius: '.75em',
    boxShadow: '0 0 0 .1em #ceb9da',
    marginBottom: '1em',
    padding: '0px',
    [theme.breakpoints.up(700)]: { 
      maxHeight: '400px',
      border: '1em solid #8224e3',
      borderRadius: '1.5em',
      boxShadow: '0 0 0 .25em #ceb9da',
      padding: '0px',
    },
  },

  
  leadIn:
  {
    fontStyle: 'italic',
    fontSize: '1em',
    letterSpacing: '.1em',
    fontWeight: '600',
    textSizeAdjust: '95%',
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em'
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2.5em'
    },
    [theme.breakpoints.up(700)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.25em',
    },
  },
  title:
  {
    fontSize: '1.5em',
    fontWeight: '900',    
    textSizeAdjust: '100%',
    paddingTop: '0em',
    padding: '.25em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.3em !important',
      paddingLeft: '2em',
      paddingRight: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '2em !important',
      padding: '.5em',
      paddingTop: '.1em',
    },
  },  
  signUp: {
  },

  whiteBox: {
    background: 'rgba(255,255,255,.3)',
    height: '100%',
  },

  headline: {
    color: 'rgb(45, 45, 45)',
    fontSize: '1.1em',
    fontWeight: '600',
    lineHeight: '1.5em',
    marginBottom: '0px',
    paddingTop: '.1em',
    padding: '.5em',
    position: 'relative',
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em',
    },
    [theme.breakpoints.up(700)]: { 
      paddingTop: '.5em',
      padding: '1em',
      fontSize: '1.4em',
    },
    [theme.breakpoints.up(325)]: { 
      paddingTop: '.25em',
      padding: '.75em',
      fontSize: '1.2em',
    },
  },

  pinkBanner: {
    background: 'rgba(192,72,153,.2)',
    fontSize: '1.25em',
    fontWeight: '800',
    padding: '.5em',
    marginBottom: '.5em',
    [theme.breakpoints.up(700)]: { 
      marginRight: '.5em',
      marginLeft: '.5em',
      fontSize: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.4em',
    },
  },

  date:{
    fontSize: '1.25em',
    marginBottom: '1em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '1.75em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.5em',
    },

  },

  bigishInput: {
    marginRight: '1em',
    marginLeft: '1em',
  },
  
  bigishInputButton: {
    color: 'rgb(45, 45, 45)',
    backgroundColor: '#ffbd59',
    borderRadius: '.5em',
    textDecoration: 'none',
    marginRight: '20%',
    marginLeft: '20%',
    marginTop: '.5em',
    marginBottom: '.5em',
    paddingRight: '.5em',
    paddingLeft: '.5em',
    fontWeight: '800',
    fontFamily: "Lora, 'Playfair Display', serif",
    fontSize: '1.25em',
    '&:hover': {
      backgroundColor: '#df9d39'
    },
    [theme.breakpoints.up(700)]: { 
      fontSize: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.5em',
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
    color: 'black',
    padding: '.5em',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    [theme.breakpoints.up(700)]: { 
      padding: '1em',
    },
  },
  leadIn2: {
    fontSize: '1.2em',
    marginTop: '.5em',
    marginBottom: '.5em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '1.75em',
      marginBottom: '2em',
      marginTop: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      marginBottom: '1em',
      marginTop: '.75em',
    },
  },
  title2: {
    backgroundColor: '#44c4d7',
    color: 'white',
    fontSize: '1.25em',
    fontWeight: '700',
    letterSpacing: '.1em',
    marginLeft: '.5em',
    marginRight: '.5em',
    padding: '.1em',
    paddingLeft: '.25em',
    paddingRight: '.25em',
    borderRadius: '.75em',
    [theme.breakpoints.up(700)]: { 
      paddingLeft: '2em',
      paddingRight: '2em',
      fontSize: '2.25em',
    },
    [theme.breakpoints.up(325)]: { 
      paddingLeft: '1em',
      paddingRight: '1em',
      fontSize: '1.5em',
    },
  },
  subtitle2: {
    fontSize: '1.75em',
    fontWeight: '700',
    paddingTop: '1em',
    paddingBottom: '.3em',
    [theme.breakpoints.up(700)]: { 
      paddingTop: '2em',
      paddingBottom: '.75em',
    },
    [theme.breakpoints.up(325)]: { 
      paddingTop: '1.5em',
    },
  },
  itemText: {
    fontSize: '1.25em',
    fontFamily: "Lora, 'Playfair Display', serif",
    fontStyle: 'italic',
    '& em': {
      fontWeight: '700',
    },
    margin: '.5em',
    marginTop: '0',
    marginBottom: '.25em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '1.75em',
      marginBottom: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.5em',
      marginBottom: '.5em',
    },
  },
  subText2: {
    fontSize: '.6em',
    fontStyle: 'italic',
    fontWeight: '600',
    display: 'block',
  },
  columnHolder: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  hostBox:
  {
    fontFamily: "Lora, 'Playfair Display', serif",
    outline: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundImage: 'url(darkBackground.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '.5em',

    [theme.breakpoints.up(700)]: { 
      padding: '1.5em',
    },
  },

  leadIn3: {
    textAlign: 'left',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '1.5em',
    padding: '.5em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2em',
      padding: '1em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.75em',
      padding: '.75em',
    },
  },
  hostPicture: {
    maxWidth: '100%',
    [theme.breakpoints.up(700)]: { 
      maxWidth: '50%',
    },
    [theme.breakpoints.up(325)]: { 
      maxWidth: '90%',
    },
  },
  title3: {
    fontSize: '2em',
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
  },
  subtitle3: {
    fontSize: '1.8em',
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
    paddingBottom: '.25em',
    [theme.breakpoints.up(700)]: { 
      paddingBottom: '1em',
    },
  },
  text3: {
    padding: '.5em',
    fontSize: '1.2em',
    color: 'black',
    fontStyle: 'italic',
    [theme.breakpoints.up(700)]: { 
      padding: '1em',
      fontSize: '1.53em',
    },
    [theme.breakpoints.up(325)]: { 
      padding: '.75em',
      fontSize: '1.3em',
    },
  },

  footer:
  {
    display: 'block',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
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
    color: 'cornflowerblue'
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
  }
}));

export function Squeeze() {
  document.body.style.backgroundImage = "url(/Squeeze.jpg)";


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
        <div className={classes.topBox} id="topBox">
          <Grid container style={{margin: 0, width: '100%',}} justify="space-around">
            <Grid item xs={12} sm={5} className={classes.imageContainer}>
              <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "none", sm: "block" }}>
                <img src="SqueezeImage.transparent.png" className={classes.image} alt="" tabIndex="0" />
              </Box>            
            </Grid>
            <Grid item xs={12} sm={7} className={classes.signUp}>
              <div className={classes.whiteBox}>
                <div className={clsx(classes.pink, classes.leadIn)}>Free Live Challenge</div>                
                <div className={clsx(classes.purple, classes.title)}>Frustration-Free Parenting Jumpstart</div>
                <div className={classes.headline}>Walk away knowing how to transform "that moment" (when your kid is driving you up the wall) into <span className={clsx(classes.pink, classes.emphasis)}>smiles</span> and <span className={clsx(classes.pink, classes.emphasis)}>connection</span>, and toss the parenting guilt for good!</div>
                <div className={clsx(classes.pinkBanner, classes.purple)}>This jumpstart will be held...</div>
                <div className={clsx(classes.purple, classes.date)}>July 13 - 17, 2020</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                    <TextField id="name"  name="name"  label="Name" className={classes.bigishInput}/>
                    <TextField id="email" name="email" label="Email address" className={classes.bigishInput} />
                    <Button type="submit" className={classes.bigishInputButton}>SIGN ME UP!</Button>
                  </FormControl>
              </form>
            </Grid>
          </Grid>
          <Grid className={classes.imageContainer}>
            <Box component={Grid} className={classes.imageInnerContainer} item xs={12} display={{ xs: "block", sm: "none" }}>
              <img src="SqueezeImage.transparent.png" className={classes.image} alt="" tabIndex="0" />
            </Box>            
          </Grid>
        </div>
        <div className={classes.lifeChangerBox}>
          <div className={classes.leadIn2}>Imagine yourself working WITH your natural emotional responses - instead of supressing them - to have the energy, desire, and enthusiasm that you NEED to transform your parenting.</div>
          <div className={classes.title2}>Here Are Three Ways This Jumpstart Will Change Your Life:</div>          
          <Grid container style={{margin: 0, width: '100%',}} justify="space-around">
            <Grid item xs={12} sm={4}>
              <div className={classes.subtitle2}>Life Changer #1</div>
              <div className={clsx(classes.itemText, classes.cyan)}>The <em>ONE Thing You Can Do</em> (in the space of two breaths) to transform frustration and impatience into <em>calm</em> and <em>confidence</em> ... so that you can STOP feeling guilty for snapping or yelling.</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.subtitle2}>Life Changer #2</div>
              <div className={clsx(classes.itemText, classes.cyan)}>The Key Practice to <em>End Emotional Burnout for Good</em>, without trying to rely on willpower or self-care opportunities to fix everything.</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.subtitle2}>Life Changer #3</div>
              <div className={clsx(classes.itemText, classes.cyan)}>My Specific System to <em>Put You In Complete Emotional Control</em> during the most challenging moments of your day, so that you can stop tiptoeing around your child's responses.</div>
            </Grid>
          </Grid>
          <Button className={classes.bigishInputButton} href="#topBox">
            <div className={classes.columnHolder}>
              <div>I'm ready to change!</div>
              <small className={classes.subText2}>Sign Up Now</small>
            </div>
          </Button>
        </div>

        <div className={classes.testimonialsBox}>
          <h1>Testimonials</h1>
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
        </div>

        <div className={classes.hostBox}>
          <div className={classes.leadIn3}>About your host:</div>
          <img src="hostPicture.png" className={classes.hostPicture} />
          <div className={classes.title3}>Hi, I'm Alison.</div>
          <div className={classes.subtitle3}>Homeschooling WAHM of five.</div>
          <div className={classes.text3}>After suffering through three awful bouts of prenatal depression, I was questioning my ability to be a good parent.
          I had learned all of the positive parenting techniques and tools (and I mean ALL - I read every parenting book at my library), but I couldn't seem
          to keep my cool to actually use them anymore. I felt out of control and vacillated between snapping at my kids, and burying myself on my phone to
          avoid snapping at them. I felt guilty all the time.</div>
          <div className={classes.text3}>Then I developed the Power Emotion system. Suddenly, I could respond to my kids according to my values, no matter 
          how challenging their behavior was. I felt deeply connected with my kids, ESPECIALLY when we experienced emotional upheaval. I truly enjoyed time
          with them, instead of being drained by it.</div>
          <div className={classes.text3}>If you're ready for the same transformation, now is the time! Join me for this FREE five-day jumpstart. You'll walk
          away with the skills to handle the emotional upheavals of parenting (the kids' and your own) with energy, confidence, and love.</div>          
          <Button className={classes.bigishInputButton} href="#topBox">
            <div className={classes.columnHolder}>
              <div>Are you ready?</div>
              <small className={classes.subText2}>Sign Up Now</small>
            </div>
          </Button>
        </div>
        <div className={classes.content}></div>
        <div className={classes.footer}><b>AlisonPBrown.com</b><span> - All Rights Reserved - </span><span><Link className={classes.link} href="/privacy-policy">Privacy Policy</Link></span></div>
      </div>
    </div>
  );
}
