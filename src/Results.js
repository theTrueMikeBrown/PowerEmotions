import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Results.css';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({ 
  videoWrapper: {
    padding: '1em'
  },
  upperButtonWrapper: {    
    padding: '1em'
  },
  image: {
    width: '70%',
    maxWidth: '25em'
  },
  littleBig: {
    fontSize: '1.25em',
  },
  altText: {
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '1.5em',
    lineHeight: '1em',
  },
  altTextSmall: {
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '1.2em',
    lineHeight: '1em',
  },
  altTextDark: {
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '1.2em',
    color: '#408',
    lineHeight: '1em',
  },
  altTextRed: {
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '1.2em',
    color: '#A04',
    lineHeight: '1em'
  },
  bigText: {
    fontSize: '1.75em',
    fontStyle: 'italic',
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: '700',
  },
  underline: {
    textDecoration: 'underline',
  },
  highlight: {  
    color: '#000',
    backgroundColor: '#FF0'
  },
  grayHighlight: {  
    color: '#fff',
    backgroundColor: '#888A'
  },
  page:{
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '500',
    letterSpacing: '.05em',
    textSizeAdjust: '100%',
    maxWidth: '50em',
    margin: '0 auto'
  },
  text: { 
    textAlign: 'left',
    paddingTop: '1em',
    paddingLeft: '1em',
  },
  title:
  {
    fontSize: '2.5em',
    fontStyle: 'italic',
    fontWeight: '700',
  },
  aside: {
    textAlign: 'center',    
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  emAside: {
    textAlign: 'center',
    fontStyle: 'italic',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  dropcap: {    
    textAlign: 'left',
    paddingLeft: '1em',
    paddingTop: '1em',
    fontSize: '1.5em',
    fontWeight: '700',
  },  
  buildUp:{ 
    textAlign: 'left',
    padding: '.5em',
    paddingLeft: '3em',
  },
  buildUpper:{ 
    textAlign: 'left',
    paddingRight: '1em',
    paddingLeft: '5em',
  },
header2:{  
  paddingTop: '2em',
  fontSize: '1.5em',
},
emphasis:{   
  paddingTop: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  fontStyle: 'italic',
  fontWeight: 'bold',
  textAlign: 'left',
},
caption:{
  padding: '1em',
  fontSize: '1.5em',
  fontStyle: 'italic',
  textAlign: 'center',
},
title2:{
  paddingTop: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  fontSize: '1.5em',
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'italic',
},
title3:{
  paddingBottom: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  fontSize: '1.5em',
  textAlign: 'center',
},
asideIndent1:{
  textAlign: 'center',
  paddingRight: '1em',
  paddingLeft: '3em',
},
asideIndent2:{   
  textAlign: 'center',
  paddingRight: '1em',
  paddingLeft: '5em',
},
tightBuildUp:{ 
  textAlign: 'left',
  paddingRight: '1em',
  paddingLeft: '3em',
},
specialAside:{
  paddingLeft: '1em',
  paddingRight: '1em',
  fontSize: '1.25em',
  textAlign: 'center',
},
title4:{
  padding: '1em',
  paddingBottom: '2em',
  fontSize: '1.3em',
  textAlign: 'center',  
  fontWeight: '700',  
  fontStyle: 'italic',
},

  button:
  {
    color: 'darkblue',
    backgroundColor: 'orange',
    fontWeight: '700',
    fontSize: '1.5em',
  },
  footer:
  {
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    fontSize: '1em',
    marginTop: '1.25em',
    marginBottom: '.25em',
    overflowWrap: 'break-word',
    padding: '0',
    textSizeAdjust: '100%',
    height: '3em',
    width: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',
  }
}));

export function Results() {  
  document.body.style.backgroundImage = "url(/results.jpg)";
  document.body.style.backgroundSize = "auto";
  const classes = useStyles();
  const location = useLocation();
  var type = location.pathname.substring(9);
  let groupLink = "https://www.facebook.com/groups/poweremotions";

  var fbq = window.fbq || (() => {});
  let videos = {
    Angry: "https://www.youtube.com/embed/HaVATeH1cXA",
    Avoidant: "https://www.youtube.com/embed/F4ci4IBFhvk",
    Busy: "https://www.youtube.com/embed/-8iNxUs-eUc",
    Worrier: "https://www.youtube.com/embed/n7vmw5rgNLc",
  };
    
  const handleJoin = (event) => {
     event.preventDefault()      
     fbq('track', 'CompleteRegistration');

     window.location.href = groupLink;
  };

  var start = (<><div className="video-container"><iframe src={videos[type]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
  <div className={classes.upperButtonWrapper}><Button
          href={groupLink}
          onClick={handleJoin}
          variant="contained"
          color="primary"
          className={classes.button}>Join now</Button></div>
  <div className={classes.text}>Your Stress Response Type is</div></>)
  var meet = (<><div className={classes.header2}><span className={classes.bold}>Meet your stress-busting superpower:</span></div>
    <img src="/AngerDragon.png" className={classes.image}></img>
    <div className={classes.caption}>Anger Dragon</div>
    <div className={classes.aside}>(ANGER is a superpower? I know, it’s super counterintuitive. Stick with me and see what I mean.)</div></>)
  var howToTrain = (<><div className={classes.title2}>How do we train an anger dragon?</div>
    <div className={classes.title3}><span className={classes.highlight}>With imagination and stories</span></div>
    <div className={classes.text}>Emotions love stories. Think about how you react to watching a movie: you know it’s just a flat screen, but you <span className={classes.italic}>feel</span> like it’s real. That’s why we’re thinking of anger as your dragon helper; it’s a story that helps you interact with your emotions.</div></>)
  var doNotWant = (<><div className={classes.tightBuildUp}><span className={classes.italic}><span className={classes.bold}>look for what you don’t want.</span></span></div>
    <div className={classes.buildUp}></div>
    <div className={classes.tightBuildUp}>{type === 'Busy' ? "“I don’t want to be interrupted.”" : "“I’m so tired, I don’t want to get off the couch.”"}</div>
    <div className={classes.tightBuildUp}>{type === 'Busy' ? "“I don’t want to be judged for how my house looks.”" : "“I don’t want to be interrupted.”"}</div>
    <div className={classes.tightBuildUp}>{type === 'Busy' ? "“I don’t want to be uncomfortable because things aren’t done right.”" : "“I don’t want to be judged.”"}</div>
    <div className={classes.tightBuildUp}><span className={classes.italic}>“I don’t want to feel this way!”</span></div>
    <div className={classes.text}>You’re looking for a thought that gives you <span className={classes.bold}>ENERGY</span>.</div>
    <div className={classes.text}>Anger Dragon gives you the energy to <span className={classes.underline}>protect</span> yourself from the {type === 'Busy' ? 'potential ' : ''}<span className={classes.altTextSmall}>pain</span> {type === 'Busy' ? ' that could come if you can’t control your environment' : ' lurking behind what you don’t want'}.</div>
    <div className={classes.buildUp}></div></>)
  var stretch = (<><div className={classes.text}></div>
    <div className={classes.aside}><span className={classes.grayHighlight}>S t r e t c h</span> your arms out wide and <span className={classes.italic}>imagine</span></div>
    <div className={classes.asideIndent1}><span className={classes.bold}>SHOVING</span> that energy out of your body</div>
    <div className={classes.asideIndent2}>into a <span className={classes.bold}>barrier</span> around you.</div>
    <div className={classes.text}>It could be a bubble, a force field, a wall of fire from Anger Dragon, or some other image that feels right to you.</div>
    <div className={classes.text}>This barrier keeps</div>
    <div className={classes.tightBuildUp}>{type === 'Busy' ? "the undone laundry" : "your kid’s screams"}</div>
    <div className={classes.tightBuildUp}>or other people’s opinions</div>
    <div className={classes.tightBuildUp}>or whatever it is that’s stressing you out</div>
    <div className={classes.text}><span className={classes.italic}>outside and away from you.</span></div>
    <div className={classes.text}>You are safe inside your anger barrier; <span className={classes.italic}><span className={classes.bold}>nothing can affect how you feel or what you think of yourself.</span></span></div>
    <div className={classes.text}></div>
    <div className={classes.specialAside}><span className={classes.highlight}>AMAZING TRUTH:</span></div></>)
  var ending = (<><div className={classes.text}>This is nothing you’ve ever heard before, but I promise you, <span className={classes.littleBig}>it works!</span> Give it a try!</div>
      <div className={classes.text}></div>
      <div className={classes.title4}>Want some help with your superpower?</div>
      <div className={classes.aside}>I’ve got just the thing!</div>
      <div className={classes.text}>On the week of <span className={classes.bold}>August 24-28</span>, 2020</div>
      <div className={classes.text}>I’m offering <span className={classes.bold}>FREE training and group coaching</span></div>
      <div className={classes.buildUp}>to help you <span className={classes.italic}>transform your anger and enjoy your kids.</span></div>
      <div className={classes.text}>
        Come join my free program, <span className={classes.bold}>How to Train Your Anger Dragon</span>, in my Facebook group: 
        <a onClick={handleJoin} href={groupLink}>{groupLink}</a>
      </div>
      <div className={classes.text}>I’ll see you there!</div>
      <div className={classes.text}>Alison</div>
      <Button
          href={groupLink}
          onClick={handleJoin}
          variant="contained"
          color="primary"
          className={classes.button}>Join now</Button>
      <div className={classes.footer}><b>alisonpbrown.com</b> - All Rights Reserved - Terms &amp; Conditions</div></>)

  var avoidant = (
    <div className={classes.page}>
      {start}
      <div className={classes.title}>Avoidant</div>
      <div className={classes.aside}>You love your kids, and you want to enjoy spending time with them.</div>
      <div className={classes.dropcap}>BUT</div>
      <div className={classes.buildUp}>You find yourself distracted easily.</div>
      <div className={classes.buildUp}>You’ll be scrolling Facebook disinterestedly and not stop when your kid tries to talk to you.</div>
      <div className={classes.buildUp}>You try to sit and play, and you mentally (or physically) wander off.</div>
      <div className={classes.buildUp}>You don’t even LIKE your distractions, but you still end up with them instead of with your kids.</div>
      <div className={classes.text}></div>
      <div className={classes.aside}>Even when you do manage to focus,</div>
      <div className={classes.emAside}>you don’t actually enjoy the time with your kids.</div>
      <div className={classes.text}>As your <span className={classes.altText}>stress</span> <span style={{fontSize: '1em'}}> i</span><span style={{fontSize: '1.1em'}}>n</span><span style={{fontSize: '1.2em'}}>c</span><span style={{fontSize: '1.3em'}}>r</span><span style={{fontSize: '1.4em'}}>e</span><span style={{fontSize: '1.5em'}}>a</span><span style={{fontSize: '1.6em'}}>s</span><span style={{fontSize: '1.7em'}}>e</span><span style={{fontSize: '1.8em'}}>s</span>, you turn to your <span className={classes.bigText}>distraction</span> more and more.</div>
      <div className={classes.text}>You feel <span className={classes.altTextDark}>guilty</span> for not interacting with your kids, but you can’t seem to STOP.</div>
      <div className={classes.header2}>GOOD NEWS: The Avoidant Response is there to <span className={classes.bold}>HELP</span> you and your kids!</div>
      <div className={classes.text}><span className={classes.altText}>Stress</span> has left your emotions and sense of self <span className={classes.altTextRed}>raw and exposed.</span> At any moment, life can <span className={classes.altTextSmall}>hurt</span>.</div>
      <div className={classes.text}>Your subconscious is trying to protect you from <span className={classes.altTextSmall}>pain</span> by cocooning you in distractions.</div>
      <div className={classes.text}>If you hurt enough, you will lash out in anger, and you refuse to do that to your kids. So on a subconscious level, you are choosing your distractions to protect them from your overreactions.</div>
      <div className={classes.emphasis}>Your avoidance is keeping you and your kids safe.</div>
      <div className={classes.emphasis}>But it’s only meant to help you for a short amount of time, not be a way of life.</div>
      <div className={classes.header2}><span className={classes.bold}>GREAT NEWS</span>: You have within you the SUPERPOWER to STOP the Avoidant Response in its tracks!</div>
      {meet}
      <div className={classes.text}>Anger Dragon exists to <span className={classes.bold}>protect</span> you from danger and stress. It wants you to be <span className={classes.bold}>safe</span> from <span className={classes.altTextSmall}>pain</span>.</div>
      <div className={classes.text}>It’s not helping you right now because you’ve been raised to <span className={classes.altText}>dishonor</span> and <span className={classes.altText}>ignore</span> your anger dragon.</div>
      <div className={classes.text}>Because uncontrolled anger can hurt people, you’ve shut down all anger… and removed your ability to feel safe without your distractions.</div>
      <div className={classes.text}>When you <span className={classes.bold}>TRAIN</span> your anger dragon to protect you without hurting anyone, you won’t need your distractions to feel safe.</div>
      {howToTrain}
      <div className={classes.text}><span className={classes.italic}>So tell yourself this story:</span></div>
      <div className={classes.text}>When you find yourself buried in your distractions…</div>
      {doNotWant}
      <div className={classes.aside}>Repeat your statement to yourself and build that energy in your body:</div>
      <div className={classes.aside}><span className={classes.altTextSmall}>tight muscles, clenched jaw, bunched fists.</span></div>
      {stretch}
      <div className={classes.specialAside}><span className={classes.highlight}>When you do this, the angry feelings and the desire for distraction go away.</span></div>
      <div className={classes.aside}>They’ve done their job protecting you and your kids.</div>
      <div className={classes.text}>Inside your anger barrier, you feel <span className={classes.bold}>calm</span> and <span className={classes.bold}>collected</span>. You can interact with your kids with <span className={classes.bold}>love</span>, being fully <span className={classes.bold}>present</span>, because you are safe from pain.</div>
      {ending}
    </div>)

var angry = (
  <div className={classes.page}>
    {start}
    <div className={classes.title}>Angry</div>
    <div className={classes.aside}>You love your kids, and you want to enjoy spending time with them.</div>
    <div className={classes.dropcap}>BUT</div>
    <div className={classes.buildUp}>You get so frustrated when they don’t do what you ask. They drive you up the wall!</div>
    <div className={classes.buildUp}>You find yourself:</div>
    <div className={classes.buildUpper}>Yelling</div>
    <div className={classes.buildUpper}>Slamming doors</div>
    <div className={classes.buildUpper}>Intimidating your kids with your body and voice</div>
    <div className={classes.buildUp}>You blow up at your kids until they quake, then hide in your room wondering what you’ve done.</div>
    <div className={classes.text}></div>
    <div className={classes.aside}>Even when you do manage to focus,</div>
    <div className={classes.emAside}>you don’t actually enjoy the time with your kids.</div>
    <div className={classes.text}>As your <span className={classes.altText}>stress</span> <span style={{fontSize: '1em'}}> i</span><span style={{fontSize: '1.1em'}}>n</span><span style={{fontSize: '1.2em'}}>c</span><span style={{fontSize: '1.3em'}}>r</span><span style={{fontSize: '1.4em'}}>e</span><span style={{fontSize: '1.5em'}}>a</span><span style={{fontSize: '1.6em'}}>s</span><span style={{fontSize: '1.7em'}}>e</span><span style={{fontSize: '1.8em'}}>s</span>,</div>
    <div className={classes.buildUp}>your <span className={classes.bigText}>anger</span> appears more and more often.</div>
    <div className={classes.text}>You see <span className={classes.altTextDark}>fear</span> in your children's eyes, and it breaks your heart... but you can’t stop.</div>
    <div className={classes.header2}>GOOD NEWS: The Anger Response is there to <span className={classes.bold}>HELP</span> you!</div>
    <div className={classes.text}><span className={classes.altText}>Stress</span> has left your emotions and sense of self <span className={classes.altTextRed}>raw and exposed.</span> At any moment, life can <span className={classes.altTextSmall}>hurt</span>.</div>
    <div className={classes.text}>Your subconscious is trying to protect you from <span className={classes.altTextSmall}>pain</span> by lashing out.</div>
    <div className={classes.emphasis}>Your anger is trying to keep you safe.</div>
    <div className={classes.emphasis}>But it needs to be channelled properly to protect you AND your kids.</div>
    <div className={classes.header2}><span className={classes.bold}>GREAT NEWS</span>: You have within you the SUPERPOWER to make the Anger Response into your ally!</div>
    {meet}
    <div className={classes.text}>Anger Dragon exists to <span className={classes.bold}>protect</span> you from danger and stress. It wants you to be <span className={classes.bold}>safe</span> from <span className={classes.altTextSmall}>pain</span>.</div>
    <div className={classes.text}>It’s rampaging right now because you’ve been raised to <span className={classes.altText}>dishonor</span> and <span className={classes.altText}>ignore</span> your anger dragon.</div>
    <div className={classes.aside}>🐕 It’s like an untrained dog running wild.</div>
    <div className={classes.aside}>But if you tame and train it, your anger dragon becomes your <span className={classes.italic}>best friend</span>. 🐶</div>
    {howToTrain}
    <div className={classes.text}><span className={classes.italic}>So tell yourself this story about anger:</span></div>
    <div className={classes.text}>When you’re annoyed, frustrated, or impatient…</div>
    {doNotWant}
    <div className={classes.aside}>Find that energy in your body:<span className={classes.altTextSmall}>tight muscles, clenched jaw, bunched fists.</span></div>
    {stretch}
    <div className={classes.specialAside}><span className={classes.highlight}>When you do this, the angry feelings go away.</span></div>
    <div className={classes.aside}>They’ve done their job protecting you.</div>
    <div className={classes.text}>Inside your anger barrier, you feel <span className={classes.bold}>calm</span> and <span className={classes.bold}>collected</span>. You can respond the way you want to, with <span className={classes.bold}>love</span> and <span className={classes.bold}>patience</span>, because you are safe from pain.</div>
    {ending}
  </div>)
  
var busy = (
  <div className={classes.page}>
    {start}
    <div className={classes.title}>Busy</div>
    <div className={classes.aside}>You love your kids, and you want to enjoy spending time with them.</div>
    <div className={classes.dropcap}>BUT</div>
    <div className={classes.buildUp}>You have so much to do and there’s never enough time.</div>
    <div className={classes.buildUp}>You’re full of nervous energy that tells you there’s always something important you should be doing.</div>
    <div className={classes.buildUp}>You try to sit and play, but you just keep thinking about your to-dos.</div>
    <div className={classes.buildUp}>You feel like you’re failing your kids because you can’t keep up with all the tasks and be involved with them too.</div>
    <div className={classes.text}>As your <span className={classes.altText}>stress</span> <span style={{fontSize: '1em'}}> i</span><span style={{fontSize: '1.1em'}}>n</span><span style={{fontSize: '1.2em'}}>c</span><span style={{fontSize: '1.3em'}}>r</span><span style={{fontSize: '1.4em'}}>e</span><span style={{fontSize: '1.5em'}}>a</span><span style={{fontSize: '1.6em'}}>s</span><span style={{fontSize: '1.7em'}}>e</span><span style={{fontSize: '1.8em'}}>s</span>, you find yourself <span className={classes.bigText}>busier and busier</span>.</div>
    <div className={classes.text}>You feel <span className={classes.altTextDark}>guilty</span> for not interacting with your kids, but you can’t seem to STOP.</div>
    <div className={classes.header2}>GOOD NEWS: The Busy Response is there to <span className={classes.bold}>HELP</span> you and your kids!</div>
    <div className={classes.text}><span className={classes.altText}>Stress</span> has left your emotions and sense of self <span className={classes.altTextRed}>raw and exposed.</span> At any moment, life can <span className={classes.altTextSmall}>hurt</span> - especially the messy, out-of-your-control parts like playing with kids.</div>
    <div className={classes.text}>Your subconscious is trying to protect you from <span className={classes.altTextSmall}>pain</span> by focusing you on tasks that you can control.</div>
    <div className={classes.text}>If you hurt enough, you will lash out in anger, and you refuse to do that to your kids. So on a subconscious level, you are keeping yourself busy to protect them from your overreactions.</div>
    <div className={classes.emphasis}>Your busyness is trying to keep you and your kids safe.</div>
    <div className={classes.emphasis}>But it’s only meant to help you for a short amount of time, not be a way of life.</div>
    <div className={classes.header2}><span className={classes.bold}>GREAT NEWS</span>: You have within you the SUPERPOWER to STOP the Busy Response in its tracks!</div>
    {meet}
    <div className={classes.text}>Anger Dragon exists to <span className={classes.bold}>protect</span> you from out-of-control feelings that make you feel in danger and stressed. It wants you to feel in control of your own reactions, so that you’re <span className={classes.bold}>safe</span> from <span className={classes.altTextSmall}>pain</span> that can come when you’re not in charge.</div>
    <div className={classes.text}>It’s not helping you right now because you’ve been raised to <span className={classes.altTextSmall}>dishonor</span> and <span className={classes.altTextSmall}>ignore</span> your anger.</div>
    <div className={classes.text}>Because uncontrolled anger can hurt people, you’ve shut down all anger… and removed your ability to feel in control of your own responses.</div>
    <div className={classes.text}></div>
    <div className={classes.aside}>When you <span className={classes.bold}>TRAIN</span> your anger dragon to protect you and help you feel in control of your own experience, you won’t need your busyness to feel safe.</div>
    {howToTrain}
    <div className={classes.text}><span className={classes.italic}>So tell yourself this story:</span></div>
    <div className={classes.text}>When you find yourself overwhelmed with things to do…</div>
    {doNotWant}
    <div className={classes.aside}>Repeat your statement to yourself and build that energy in your body:</div>
    <div className={classes.aside}><span className={classes.altTextSmall}>tight muscles, clenched jaw, bunched fists.</span></div>
    {stretch}
    <div className={classes.specialAside}><span className={classes.highlight}>When you do this, the busy energy (and the angry feelings) go away.</span></div>
    <div className={classes.aside}>They’ve done their job protecting you.</div>
    <div className={classes.text}>Inside your anger barrier, you feel <span className={classes.bold}>calm</span> and <span className={classes.bold}>collected</span>. You can interact with your kids with <span className={classes.bold}>love</span> and being fully <span className={classes.bold}>present</span>, even if your other work isn’t done right, because you are safe from pain.</div>
    {ending}
  </div>)
   
var worrier = (
  <div className={classes.page}>
    {start}
    <div className={classes.title}>Worrier</div>
    <div className={classes.aside}>You love your kids, and you want to enjoy spending time with them.</div>
    <div className={classes.dropcap}>BUT</div>
    <div className={classes.buildUp}>You get so caught up in anxious thoughts and worries about the future that you can’t do anything.</div>
    <div className={classes.buildUp}>You try to sit and play, but you just keep thinking about the past or the future instead of being present.</div>
    <div className={classes.buildUp}>Your anxious thoughts make you feel worse and worse until you withdraw from or blow up at your kids.</div>
    <div className={classes.text}>As your <span className={classes.altText}>stress</span> <span style={{fontSize: '1em'}}> i</span><span style={{fontSize: '1.1em'}}>n</span><span style={{fontSize: '1.2em'}}>c</span><span style={{fontSize: '1.3em'}}>r</span><span style={{fontSize: '1.4em'}}>e</span><span style={{fontSize: '1.5em'}}>a</span><span style={{fontSize: '1.6em'}}>s</span><span style={{fontSize: '1.7em'}}>e</span><span style={{fontSize: '1.8em'}}>s</span>, you find yourself stuck in <span className={classes.bigText}>worry</span>.</div>
    <div className={classes.text}>You feel <span className={classes.altTextDark}>guilty</span> because you’re not being present with your kids, but you can’t seem to STOP.</div>
    <div className={classes.header2}>GOOD NEWS: The Worrier Response is there to <span className={classes.bold}>HELP</span> you and your kids!</div>
    <div className={classes.text}><span className={classes.altText}>Stress</span> has left your emotions and sense of self <span className={classes.altTextRed}>raw and exposed.</span> At any moment, life can <span className={classes.altTextSmall}>hurt</span> and you’re trying to keep everyone safe.</div>
    <div className={classes.text}>Your subconscious is trying to protect you from <span className={classes.altTextSmall}>pain</span> by keeping you aware of all possible dangers or mistakes.</div>
    <div className={classes.text}>You notice all the things that you’ve done wrong in the past or that could go wrong in the future so you can protect your family.</div>
    <div className={classes.emphasis}>Your worry is trying to keep you and your kids safe.</div>
    <div className={classes.emphasis}>But it’s not the right tool for the job.</div>
    <div className={classes.header2}><span className={classes.bold}>GREAT NEWS</span>: You have within you the SUPERPOWER to STOP the Worry Response in its tracks!</div>
    {meet}
    <div className={classes.text}>Anger Dragon exists to <span className={classes.bold}>protect</span> you from all kinds of danger, including your own mistakes. It wants you to feel in control of your own reactions; you feel <span className={classes.bold}>safe</span> when you know that you can handle whatever happens, even if you mess up.</div>
    <div className={classes.text}>You don’t have that confidence right now because you’ve been raised to <span className={classes.altTextSmall}>dishonor</span> and <span className={classes.altTextSmall}>ignore</span> your anger.</div>
    <div className={classes.text}>Because uncontrolled anger can hurt people, you’ve shut down all anger… which takes away your clarity and confidence that you can handle whatever comes up.</div>
    <div className={classes.text}></div>
    <div className={classes.aside}>When you <span className={classes.bold}>TRAIN</span> your anger dragon to protect you and help you feel in control of your own experience, you won’t need to worry to feel safe.</div>
    {howToTrain}
    <div className={classes.text}><span className={classes.italic}>So tell yourself this story:</span></div>
    <div className={classes.text}>When you find yourself stuck in worries and anxious thoughts…</div>

    <div className={classes.tightBuildUp}><span className={classes.italic}><span className={classes.bold}>look for what you don’t want.</span></span></div>
    <div className={classes.buildUp}></div>
    <div className={classes.tightBuildUp}>“I don’t want to be judged by other moms.”</div>
    <div className={classes.tightBuildUp}>“I don’t want to mess up my kids.”</div>
    <div className={classes.tightBuildUp}><span className={classes.italic}>“I don’t want to feel this way!”</span></div>
    <div className={classes.text}>You’re looking for a thought that gives you <span className={classes.bold}>ENERGY</span>.</div>
    <div className={classes.text}>Anger Dragon gives you the energy to <span className={classes.underline}>protect</span> yourself from the {type === 'Busy' ? 'potential ' : ''}<span className={classes.altTextSmall}>pain</span> that comes when we mess up, or even just think about something going wrong.</div>
    <div className={classes.buildUp}></div>

    <div className={classes.aside}>Repeat your statement to yourself and build that energy in your body:</div>
    <div className={classes.aside}><span className={classes.altTextSmall}>tight muscles, clenched jaw, bunched fists.</span></div>
    {stretch}
    <div className={classes.specialAside}><span className={classes.highlight}>When you do this, the worries go away.</span></div>
    <div className={classes.aside}>You can be confident without thinking about it.</div>
    <div className={classes.text}>Inside your anger barrier, you feel <span className={classes.bold}>calm</span> and <span className={classes.bold}>collected</span>.
      You can interact with your kids with <span className={classes.bold}>love</span> and being fully <span className={classes.bold}>present</span>, even if something goes wrong, because you are safe from pain, no matter what happens.</div>
    {ending}
  </div>)
  return type === 'Avoidant' ? avoidant : type === 'Angry' ? angry : type === 'Busy' ? busy : worrier;
}
