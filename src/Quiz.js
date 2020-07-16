import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './SqueezeGlobal.css';
import { RadioGroup, TextField, FormControlLabel, FormLabel, FormControl, Radio, Button, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({ 
  helperText: {
    textAlign: 'center',
    marginTop: '1em'
  },  
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
  imageInnerContainer: {
    maxHeight: '400px'
  },
  
  leadIn:
  {
    fontStyle: 'italic',
    fontSize: '1.25em',
    letterSpacing: '.1em',
    fontWeight: '600',
    textSizeAdjust: '95%',
    paddingBottom: '.5em',
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em'
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2.5em'
    },
    [theme.breakpoints.up(700)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.75em',
    },
  },
  
  welcome:
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
  leadIn2:
  {
    fontStyle: 'italic',
    fontSize: '1em',
    letterSpacing: '.1em',
    fontWeight: '600',
    textSizeAdjust: '95%',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.1em',
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em'
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2.5em'
    },
    [theme.breakpoints.up(700)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.75em',
    },
  },
  leadIn3:
  {
    fontStyle: 'italic',
    fontSize: '.9em',
    letterSpacing: '.1em',
    fontWeight: '600',
    textSizeAdjust: '95%',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.1em',
    [theme.breakpoints.up(1000)]: { 
      paddingTop: '1em'
    },
    [theme.breakpoints.up(1100)]: { 
      paddingTop: '2.5em'
    },
    [theme.breakpoints.up(700)]: { 
      textSizeAdjust: '100%',
      fontSize: '1.5em',
    },
  },
  subtitle:
  {
    fontSize: '1.5em',
    fontWeight: '900',    
    textSizeAdjust: '100%',
    paddingTop: '.5em',
    padding: '.25em',
    [theme.breakpoints.up(700)]: { 
      fontSize: '2.3em !important',
      paddingLeft: '2em',
      paddingRight: '2em',
    },
    [theme.breakpoints.up(325)]: { 
      fontSize: '1.5em !important',
      padding: '.5em',
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

  topBox: {    
    fontFamily: "Lora, 'Playfair Display', serif",
    outline: 'none',

    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    marginBottom: '1em',
    [theme.breakpoints.up(700)]: { 
      padding: '1.5em',
    },
  },
  quizBox: {
    backgroundColor: 'white',
    color: 'black',
    padding: '.5em',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    [theme.breakpoints.up(700)]: { 
      padding: '1em',
    },
  },
  subText2: {
    fontSize: '.6em',
    fontStyle: 'italic',
    fontWeight: '600',
    display: 'block',
  },
  question: {    
    fontSize: '1em',
    color: '#000',
    marginBottom: '0',
    border: 'none'
  },
  answers: {    
    margin: 'auto',
    display: 'inline-block',
    marginBottom: '.75em'
  },
  last: {
    marginRight: '0'
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

}));

export function Quiz() {
  document.body.style.backgroundImage = "url(/Squeeze.jpg)";
  const [toResults, setToResults] = useState(false);
  const [targetPage, setTargetPage] = useState('Avoidant');
  const classes = useStyles();
  const [q1Value, setQ1Value] = React.useState('');
  const [q2Value, setQ2Value] = React.useState('');
  const [q3Value, setQ3Value] = React.useState('');
  const [q4Value, setQ4Value] = React.useState('');
  const [q5Value, setQ5Value] = React.useState('');
  const [q6Value, setQ6Value] = React.useState('');
  const [q7Value, setQ7Value] = React.useState('');
  const [q8Value, setQ8Value] = React.useState('');
  const [q9Value, setQ9Value] = React.useState('');
  const [q10Value, setQ10Value] = React.useState('');
  const [q11Value, setQ11Value] = React.useState('');
  const [q12Value, setQ12Value] = React.useState('');
  
  const handleQ1Change = (event) => { setQ1Value(event.target.value); };
  const handleQ2Change = (event) => { setQ2Value(event.target.value); };
  const handleQ3Change = (event) => { setQ3Value(event.target.value); };
  const handleQ4Change = (event) => { setQ4Value(event.target.value); };
  const handleQ5Change = (event) => { setQ5Value(event.target.value); };
  const handleQ6Change = (event) => { setQ6Value(event.target.value); };
  const handleQ7Change = (event) => { setQ7Value(event.target.value); };
  const handleQ8Change = (event) => { setQ8Value(event.target.value); };
  const handleQ9Change = (event) => { setQ9Value(event.target.value); };
  const handleQ10Change = (event) => { setQ10Value(event.target.value); };
  const handleQ11Change = (event) => { setQ11Value(event.target.value); };
  const handleQ12Change = (event) => { setQ12Value(event.target.value); };

  const handleSubmit = (event) => {
    event.preventDefault()
    let avoidantScore = parseInt(q1Value || "3") + parseInt(q5Value || "3") + parseInt(q9Value || "3")
    let angryScore = parseInt(q2Value || "3") + parseInt(q6Value || "3") + parseInt(q10Value || "3")
    let busyScore =  parseInt(q3Value || "3") + parseInt(q7Value || "3") + parseInt(q11Value || "3")
    let worrierScore =  parseInt(q4Value || "3") + parseInt(q8Value || "3") + parseInt(q12Value || "3")

    let max = avoidantScore
    let targetPage = 'Avoidant'
    let id = 1
    if (angryScore > max) {
      max = angryScore
      targetPage = 'Angry'
      id = 2
    }
    if (busyScore > max) {
      max = busyScore
      targetPage = 'Busy'
      id = 3
    }
    if (worrierScore > max) {
      max = worrierScore
      targetPage = 'Worrier'
      id = 4
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1MynE0a2ReM2iFB5s5FUNvjaxTxYhP2jibh4lYWGoAkbWb03Y/exec'
    const form = document.forms['submit-to-google-sheet']
    let data = new FormData(form);
    data.append('responsetype', targetPage)
    fetch(scriptURL, { method: 'POST', body: data})
      .then(response => {      
        setTargetPage(targetPage);
        setToResults(true);
      })
      .catch(error => console.error('Error!', error.message));


    //make the result page do the fbq event of the thank you page
    //make the email on the spreadsheet be linked to which result they got    
  };

  if (toResults === true) {    
    return <Redirect to={`/results/${targetPage}`} />
  }

  return (
    <div className={classes.container}>
      <div className={classes.page}>
        <div className={classes.topBox}>
          <div className={classes.welcome}>Welcome!</div>
          <div className={classes.leadIn}>When you know your Stress Response Type, you can learn how to use your natural stress-busting SUPERPOWER to relax, feel confident, and enjoy time with your kids!</div>
          <div className={classes.spacer}></div>
          <div className={classes.leadIn2}>For each statement, think about how you react under stress. Mark how well the statement matches your reactions: </div>
          <div className={classes.leadIn3}>1 = Nope, I’ve never responded to stress that way.</div>
          <div className={classes.leadIn3}>5 = Oh, wow, that is exactly what I do when I’m stressed!</div>
        </div>
        <div className={classes.quizBox}>
        
          <div className={classes.subtitle}>START</div>
          <div className={classes.spacer}></div>

          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>When I’m stressed, I get stuck scrolling Facebook or other distractions without really enjoying it.</FormLabel>
              <RadioGroup aria-label="question1" name="q1" value={q1Value} row className={classes.answers} onChange={handleQ1Change} required>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I catch myself yelling at my kids and really wish I could stop.</FormLabel>
              <RadioGroup aria-label="question2" name="q2" value={q2Value} row className={classes.answers} onChange={handleQ2Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>The more stress I’m under, the more I scramble to keep up with housework and tasks, instead of spending time with my kids.</FormLabel>
              <RadioGroup aria-label="question3" name="q3" value={q3Value} row className={classes.answers} onChange={handleQ3Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I get distracted from my kids because I’m beating myself up about mistakes I’ve made.</FormLabel>
              <RadioGroup aria-label="question4" name="q4" value={q4Value} row className={classes.answers} onChange={handleQ4Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I hide from my kids in the bathroom (or in the pantry eating all the chocolate chips) when I’m overwhelmed.</FormLabel>
              <RadioGroup aria-label="question5" name="q5" value={q5Value} row className={classes.answers} onChange={handleQ5Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I lose my patience when my kids fight or don’t do what they’re told.</FormLabel>
              <RadioGroup aria-label="question6" name="q6" value={q6Value} row className={classes.answers} onChange={handleQ6Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I feel like there’s so much housework that I need to get done that I’m always distracted from my kids.</FormLabel>
              <RadioGroup aria-label="question7" name="q7" value={q7Value} row className={classes.answers} onChange={handleQ7Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I get upset at my kids because I’m so worried about how things will turn out (we’ll be late, things won’t get done, etc).</FormLabel>
              <RadioGroup aria-label="question8" name="q8" value={q8Value} row className={classes.answers} onChange={handleQ8Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I spend way too much time on my phone; I wish I spent that time with my kids.</FormLabel>
              <RadioGroup aria-label="question9" name="q9" value={q9Value} row className={classes.answers} onChange={handleQ9Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>My kids have to tiptoe around my reactions and pay attention to how stressed I am to know how to interact with me.</FormLabel>
              <RadioGroup aria-label="question10" name="q10" value={q10Value} row className={classes.answers} onChange={handleQ10Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>I’m juggling so many things that when I’m stressed, I can’t slow down to be present with my kids.</FormLabel>
              <RadioGroup aria-label="question11" name="q11" value={q11Value} row className={classes.answers} onChange={handleQ11Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset"  fullWidth className={classes.formControl}>
              <FormLabel component="legend" className={classes.question}>When I’m stressed, I can’t stop my thoughts from circling around whatever I’m worried about; it makes me withdrawn from or short-tempered with my kids.</FormLabel>
              <RadioGroup aria-label="question12" name="q12" value={q12Value} row className={classes.answers} onChange={handleQ12Change}>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" className={classes.last} />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
              <TextField id="name" name="name"  label="Name" className={classes.bigishInput} required/>
            </FormControl>
            <FormControl fullWidth>
              <TextField id="email" name="email" label="Email address" className={classes.bigishInput} required />
            </FormControl>
            <FormControl>
              <Button className={classes.bigishInputButton} type="submit">
                <div className={classes.columnHolder}>
                  <div>I'm done</div>
                  <small className={classes.subText2}>Show me my Stress Response Type</small>
                </div>
              </Button>
            </FormControl>
          </form>
        </div>
        <div className={classes.content}></div>
        <div className={classes.footer}><b>AlisonPBrown.com</b><span> - All Rights Reserved - </span><span><Link className={classes.link} href="/privacy-policy">Privacy Policy</Link></span></div>
      </div>
    </div>
  );
}
