import React from 'react';
import './Introduction.css';
import ResumeButton from './../Buttons/ResumeButton/ResumeButton';
import ContactButton from './../Buttons/ContactButton/ContactButton';

function Introduction(props) {
  return (
    <div className="Introduction">
      <h1 ref={props.sendRef} className="IntroductionHeading">
        Hello, I am a<br />
        <span style={{color: "#3B945E"}}>software developer.</span>
      </h1>
      <h2 ref={props.sendRef} className="IntroductionHeading2">
        My name is <span style={{color: "#3B945E"}}>Daniel Kim, </span><br />
        and I reside in<br />
        <span style={{color: "#3B945E"}}>British Columbia, Canada.</span>
      </h2>
      <p ref={props.sendRef} className="IntroductionParagraph">
        Welcome to my personal website! You can check out some of my recent projects
        and get a sense of the type of developer that I am. I hope you'll
        find something here that sparks your interest.
      </p>
      <div ref={props.sendRef} className="ResumeAndContactButtons">
        <ResumeButton customClass="IntroductionResumeButton" />
        <ContactButton customClass="IntroductionContactButton" />
      </div>
    </div>
  );
}

export default Introduction;