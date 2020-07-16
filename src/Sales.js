import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Sales.css';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  page:{
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    letterSpacing: '.05em',
    textSizeAdjust: '100%',
    maxWidth: '50em',
    margin: '0 auto',
    color: 'black',
    [theme.breakpoints.up(700)]: {
      fontSize: '1.75em',
    }
  },
  box: {
    backgroundColor: '#202',
    padding: '1em',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    background: "url('SalesBackground.jpg')",
    color: 'white',
    boxShadow: 'inset 0px 0px 0px 5px #003, inset 0px 0px 0px 6px #fff',
    [theme.breakpoints.up(700)]: { 
      boxShadow: 'inset 0px 0px 0px 10px #003, inset 0px 0px 0px 12px #fff'
    }
  },
  whiteBox: {
    backgroundColor: '#fff8',
    padding: '.5em',
    fontFamily: 'Lora, Poppins, Helvetica, sans-serif',
    color: 'black',
    [theme.breakpoints.up(700)]: { 
      padding: '1em',
    },
  },
  onlyLarge: {
    display: 'none',
    [theme.breakpoints.up(1000)]: { 
      display: 'block',
    }
  },
  notLarge: {
    display: 'block',
    [theme.breakpoints.up(1000)]: { 
      display: 'none',
    }
  },
  altFont: {
    fontFamily: '"Petit Formal Script", cursive',
    lineHeight: '1.1em',
  },
  full:{
    padding: '.25em',
    textAlign: 'left',
    [theme.breakpoints.up(700)]: { 
      textAlign: 'justify',
    },
  },
  left:{
    padding: '.25em',
    textAlign: 'left'
  },
  spacer:{
    padding: '.25em',
    [theme.breakpoints.up(700)]: { 
      padding: '1em',
    },
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
  text: { 
    textAlign: 'left',
    paddingTop: '1em',
    paddingLeft: '1em',
  },

  button:
  {
    color: 'darkblue',
    backgroundColor: 'orange',
    fontWeight: '700',
    fontSize: '1.5em',
    '&:hover': {
      backgroundColor: 'darkgoldenrod',
    }
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

export function Sales() {  
  document.body.style.backgroundImage = "url(/Background.seamless.jpg)";
  document.body.style.backgroundSize = "auto";
  const classes = useStyles();
  let groupLink = "https://alison-p-brown.square.site/product/Transforming-Motherhood/3?cs=true";

  const handleJoin = (event) => {
    event.preventDefault()
    window.location.href = groupLink;
 };

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <h1 className={clsx(classes.full, classes.italic)}>Congratulations!</h1>
        <div className={classes.full}>You have made such great progress in the “How to Train Your Anger Dragon” program! You’ve dived deep into why your anger is showing up to protect you, and you’ve learned the basic Power Emotions practice to deal with the negative energy that’s weighing you down and cutting you up inside.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>You’ve felt the difference that accessing your Power Emotions makes in your life. You’re amazed by how simple it is to make your emotions into allies, and how much you enjoy life with their help.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>Doing this program has opened your eyes to how much your Anger Dragon and Sadness Bear have to offer you. And your Power Emotions can do so much more!</div>
        <div className={classes.full}></div>
        <div className={classes.center}><Button href={groupLink}
                onClick={handleJoin}
                variant="contained"
                color="primary"
                className={classes.button}>I Want More!</Button></div>
      </div>
      <div className={classes.spacer}></div>
      <div className={classes.whiteBox}>
        <div className={classes.full}>Now you have three choices:</div>
        <div className={classes.full}></div>
        <h2 className={clsx(classes.full, classes.bold)}>Option A</h2>
        <div className={classes.full}>Think, “This was great! I’m totally going to remember these things and use them!” and don’t do anything else about it.</div>
        <div className={classes.full}></div>
        <div className={clsx(classes.full, classes.italic)}>Please don’t choose this option.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>I’ve tried this a lot; I’m sure you have too. It always ends up with me forgetting about the thing I learned pretty quickly and losing the benefits. <span className={classes.italic}>Don’t do it!</span></div>
        <div className={classes.full}></div>
        
        <h3 className={clsx(classes.full, classes.italic)}>What Option A Feels Like:</h3>
        <ul>
          <li className={clsx(classes.full, classes.italic)}>I have so many things dragging me in all directions. I feel tired and overwhelmed.</li>
          <li className={clsx(classes.full, classes.italic)}>My kids disrespect me and don’t listen. I get triggered, I’ve had enough, and I just lose it. Then I lay awake at night feeling guilty for being such a bad mom.</li>
          <li className={clsx(classes.full, classes.italic)}>I’m always distracted by having a million things to do.</li>
          <li className={clsx(classes.full, classes.italic)}>I need to put the phone down and interact with my kids - but I don’t.</li>
          <li className={clsx(classes.full, classes.italic)}>I can’t get out of my head and focus on my kids.</li>
        </ul>
        <div className={classes.full}></div>
        <div className={clsx(classes.full, classes.italic, classes.bold)}>Please don’t choose Option A!</div>
        <div className={classes.full}></div>
        <div className={classes.full}></div>
        <h2 className={clsx(classes.full, classes.bold)}>Option B</h2>
        <div className={classes.full}>Make a plan to help yourself remember and implement the Power Emotions practice on a daily basis. Work to make it a habit. Continue to participate in the group and learn more concepts that will help solidify your practice.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>This is a solid option. It will help you choose your responses and enjoy parenting more.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>But I know that there will be plenty of emotions and situations not covered by the basic practice we learned this week. You can figure them out through trial and error (that’s how I did a lot of it!), but it will take time and energy and feel frustratingly like two steps forward and one step back.</div>
        <div className={classes.full}></div>
        <h3 className={clsx(classes.full, classes.italic)}>What Option B Feels Like:</h3>
        <ul>          
          <li className={clsx(classes.full, classes.italic)}>I’m so much calmer than I was before doing Power Emotions! But it gets exhausting, and sometimes I burn out.</li>
          <li className={clsx(classes.full, classes.italic)}>I love getting new insights in the Facebook group, but I have trouble actually getting them to work for me.</li>
          <li className={clsx(classes.full, classes.italic)}>I still feel guilty that I’m not doing more or being better, and I can’t get rid of it.</li>
          <li className={clsx(classes.full, classes.italic)}>I get caught up in anxiety and struggle to find my inner balance.</li>
          <li className={clsx(classes.full, classes.italic)}>Sometimes I love being a mom and interacting with my kids - more often now than before I learned about Power Emotions - but sometimes, I really can’t stand it anymore.</li>
          <li className={clsx(classes.full, classes.italic)}>My interactions with my kids are better than they used to be, but I still feel like they don’t listen and I have to spend all my time with them reminding and pushing to get anything done.</li>
        </ul>
        <div className={classes.full}></div>
        <div className={classes.full} className={clsx(classes.italic, classes.bold)}>Option B is a good choice. Your life will be better than it was before accessing your Power Emotions, and you and your kids will benefit.</div>
        <div className={classes.full}></div>
        <div className={classes.full} className={clsx(classes.italic, classes.bold)}>But there is a better choice!</div>
        <div className={classes.full}></div>
        <div className={classes.full}></div>
        <h2 className={clsx(classes.full, classes.bold)}>Option C</h2>
        <div className={classes.full}>Tune in to the vision of the mom you have always wanted to be and the life you’ve dreamed of living. </div>
        <div className={classes.full}></div>
        <div className={clsx(classes.full, classes.italic)}>That type of life is achievable when you truly understand and honor all of your Power Emotions.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>Commit to and invest in your own transformation into the mom you long to be - by unlocking the power of your emotional intelligence.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>Get the training, coaching, accountability, and support that you need to make a real, sustainable change.</div>
        <div className={classes.full}></div>
        <div className={clsx(classes.full, classes.italic)}>This option will change your life.</div>
        <div className={classes.full}></div>
        <div className={classes.full}>You’ll love parenting and feel successful on a whole new level. </div>
        <div className={classes.full}></div>
        <div className={classes.full}>Even more, you’ll transform the emotional climate in your home. </div>
        <div className={classes.full}></div>
        <div className={classes.full}>Your kids will feel totally loved and supported while they master their own Power Emotions and learn the skills they need to interact positively with others. </div>
        <div className={classes.full}></div>
        <div className={classes.full}>As you and they develop into your best selves, you’ll make your home a happier and more peaceful place.</div>
        <div className={classes.full}></div>
        <div className={classes.full} className={clsx(classes.italic, classes.bold)}>Join me for the next three months and unlock your emotional power to heal your past and create the future of your dreams, for yourself and for your kids.</div>
        <div className={classes.full}></div>
        <h3 className={clsx(classes.full, classes.italic)}>What Option C Feels Like</h3>
        <ul>
        <li className={clsx(classes.full, classes.italic)}>I can get my kids to do their homework, clean up, or get out the door without breaking down or yelling</li>
        <li className={clsx(classes.full, classes.italic)}>I am playful! I truly enjoy hanging out with my kids and doing kid things; I can get out of my own head and just have fun.</li>
        <li className={clsx(classes.full, classes.italic)}>People ask me what happened to make me so much happier than I used to be.</li>
        <li className={clsx(classes.full, classes.italic)}>I don’t dread nighttime wakings, sickness, or other stressors because I know that, with my Power Emotions, I can handle it!</li>
        <li className={clsx(classes.full, classes.italic)}>I design my life to meet my needs and desires, and I am full of energy and enthusiasm for each day</li>
        <li className={clsx(classes.full, classes.italic)}>I dare to do the things I’ve only dreamed of because I know that even if I fail, my Power Emotions will get me through it. </li>
        <li className={clsx(classes.full, classes.italic)}>I respect my kids’ tantrums and help them recognize how their Power Emotions are showing up to help them.</li>
        <li className={clsx(classes.full, classes.italic)}>I help my kids learn socially acceptable ways to access their Power Emotions so that they will have the power to do great things.</li>
        <li className={clsx(classes.full, classes.italic)}>I enjoy being around my family because I no longer have the drain of emotionally managing everyone around me.</li>
        <li className={clsx(classes.full, classes.italic)}>I set boundaries and hold them without feeling guilty or getting angry</li>
        <li className={clsx(classes.full, classes.italic)}>I give my kids the skills they need to thrive in life.</li>
        </ul>
        <div className={classes.full}></div>
        <div className={classes.center}><Button href={groupLink}
                onClick={handleJoin}
                variant="contained"
                color="primary"
                className={classes.button}>I Want Option C!</Button></div>
        <div className={classes.full}></div>
      </div>
        <div className={classes.spacer}></div>
      <div className={classes.box}>
        <h2 className={clsx(classes.center)}>Case study: Katie</h2>
        <div className={classes.full}>I always thought I was a calm, kind parent.</div>
          <div className={classes.full}>During the jump-start, I realized I have a lot of anger that I bottled up and never let out, so it was exhausting me. I was always apathetic and tired.</div>
          <div className={classes.full}>Taking Alison's class made me realize that it is good to acknowledge and use my emotions so they can help me. I was able to truly look at what I needed to change and see how life could change and be better for me and my kids.</div>
          <div className={classes.full}>I wasn't sure if this program would be any different than other things I had learned about parenting, but I loved the new things I learned in the jump-start so I decided to try it.</div>
          <div className={classes.full}>It was wonderful to have weekly calls to talk about how life was going and how others and I were implementing the things Alison taught. I felt so much support from Alison and the group as we discussed our biggest challenges and celebrated our greatest wins.</div>
          <div className={classes.full}>I was worried about not having enough time to do what was needed, but the videos were very easy to make time for since they were so short and I was able to implement what I learned that day. It was so wonderful to have a goal and new things to look at each day.</div>
          <div className={classes.full}>I am much calmer during bedtime and getting out the door. I am also much more aware of my emotions and what they are telling me. I take time for me and am able to make choices based on my new-found family values. My kids are doing much better at expressing their emotions and communicating. I no longer feel at a complete loss every time my child throws a tantrum; now I have the tools I need to help them.</div>
          <div className={classes.full}>Alison did an excellent job explaining things in simple steps and answering any questions I had. I love that this course is about action taking and accountability and not just learning more things we should be doing as parents. I think everyone should take this class. It not only changed my parenting, it changed my marriage and my life.</div>
      </div>
        <div className={classes.spacer}></div>
      <div className={classes.whiteBox}>
        <div className={classes.article}>
          <div className={classes.full}></div>
          <div className={classes.full}>How much time and money did you spend going to school to develop your intellect? How much do you spend on your kids’ intellectual development?</div>
          <div className={classes.full}></div>
          <div className={classes.info}>
            <div className={clsx(classes.full, classes.small)}>90% of top performers have high EI</div>
            <div className={clsx(classes.full, classes.small)}>People with high EI make $29,000 more anually than their low EI counterparts</div>
          </div>
          <div className={classes.full}>Scientists have shown that Emotional Intelligence is FAR MORE IMPORTANT to your happiness and success than school-type intelligence.</div>
          <div className={classes.full}></div>
          <div className={classes.full}>And yet, we get no training in these skills. We’re left to struggle through it on our own, making ourselves and our families miserable in the process.</div>
          <div className={classes.full}></div>
          <div className={classes.full}></div>
          <div className={classes.center}>I want to help you skip the struggle!</div>
        </div>
      </div>
        <div className={classes.spacer}></div>
      <div className={clsx(classes.box, classes.onlyLarge)}>
        <div className={clsx(classes.center, classes.italic)}>Presenting...</div>
        <div className={clsx(classes.full, classes.italic)}></div>
        <h2 className={clsx(classes.center, classes.bold, classes.altFont)}>Transforming Motherhood</h2>
        <div className={clsx(classes.center, classes.italic, classes.center)}>The ONLY personal development mentoring program </div>
        <div className={clsx(classes.center, classes.italic, classes.center)}>based on emotional intelligence practices</div>
        <div className={clsx(classes.center, classes.italic, classes.center)}> for moms who are ready to align their lives with their dreams</div>
      </div>
      <div className={clsx(classes.box, classes.notLarge)}>
        <div className={clsx(classes.center, classes.italic)}>Presenting...</div>
        <div className={clsx(classes.full, classes.italic)}></div>
        <h2 className={clsx(classes.center, classes.bold, classes.altFont)}>Transforming Motherhood</h2>
        <div className={clsx(classes.center, classes.italic, classes.center)}>The ONLY personal development mentoring program based on emotional intelligence practices for moms who are ready to align their lives with their dreams</div>
      </div>
        <div className={classes.spacer}></div>
      <div className={classes.whiteBox}>
        <h3 className={clsx(classes.full, classes.italic)}>You’ll learn how to:</h3>
        <ul>
        <li className={classes.full}>Respond naturally and confidently when anxiety, guilt, apathy, exhaustion, nervousness, and all your other Power Emotions show up. Use them to help you be happier and more balanced, instead of letting them throw you off-center.</li>
        <li className={classes.full}>Form habits so that using your Power Emotions gets easier and easier, until your emotions flow naturally and you tap into their power easily and constantly. Love your life with their help.</li>
        <li className={classes.full}>Be empowered to take risks and go after the life of your dreams without worrying about how failure will affect you - you know your Power Emotions can handle whatever comes!</li>
        <li className={classes.full}>Enable your kids to live the lives of their dreams with their own Power Emotions. Watch them soar!</li>
        <li className={classes.full}>Develop your leadership skills to create a family culture of positive interactions. Help everyone in your home learn to live and work in harmony with other people. Know that your kids are prepared to be good spouses, employees, employers, and friends from the foundation of team building they’ve learned from your leadership.</li>
        </ul>
        <div className={classes.full}></div>
        <h3 className={clsx(classes.full, classes.italic)}>How will we get there?</h3>
        <ul>        
        <li className={classes.full}>Three months of daily bite-sized (5 minute) trainings in audio, video, or written format, giving you something specific to focus on each day</li>
        <li className={classes.full}>12 weekly group calls to work through this challenging soul work together and to consult with me about real-life situations that came up during the week</li>
        <li className={classes.full}>One year’s constant access to support in the private Facebook group, where I respond to all posts</li>
        <li className={classes.full}>A robust accountability program to help you measure how far you’ve come, and celebrate!</li>
        </ul>
        <div className={classes.full}></div>
        <h3 className={clsx(classes.full, classes.italic)}>Plus BONUSES:</h3>
        <ol>
        <li className={classes.full}>A collection of audio affirmations and meditations to help you take what you’ve learned and make it into a habit, created by a hypnotherapist</li>
        <li className={classes.full}>Beautiful printable reminders to help you remember the new tools you’ve learned in the moment</li>
        <li className={classes.full}>Beta access to the Feeling Friends course for teaching kids the skills to use their Power Emotions</li>
        <li className={classes.full}>Total access for your parenting partner to all of the benefits of the program - and a 15 minute video summary of the basics to show them if they don’t want to put in that much time ;)</li>
        </ol>
        <div className={classes.full}></div>
        <h1 className={clsx(classes.center, classes.italic)}>Total Investment:</h1>
        <h1 className={clsx(classes.center, classes.italic)}>$997</h1>
        <div className={classes.full}></div>
        <div className={classes.center}><Button href={groupLink}
                onClick={handleJoin}
                variant="contained"
                color="primary"
                className={classes.button}>I’m Ready to Start!</Button></div>   
        <div className={classes.full}></div>             
      </div>
        <div className={classes.spacer}></div>
        <div className={classes.box}>
          <div className={clsx(classes.full, classes.altFont)}>At the end of our three months together, you'll have built the emotional foundation that will make you unstoppable. </div>
          <div className={classes.full}></div>
          <div className={clsx(classes.full, classes.altFont)}>When you know how to rely on your Power Emotions, you will dare to shine brightly and reach for the stars - and you will support your kids in the same endeavor. </div>
          <div className={classes.full}></div>
          <div className={clsx(classes.full, classes.altFont)}>I believe that you are amazing. And when you live your life boldly and powerfully, you make the world a better place.</div>
          <div className={classes.full}></div>
          <div className={clsx(classes.full, classes.altFont)}>I want to live in that world. Do you?</div>
          <div className={classes.full}></div>
          <div className={clsx(classes.full, classes.altFont)}>Alison</div>
        </div> 
    </div>);
}
