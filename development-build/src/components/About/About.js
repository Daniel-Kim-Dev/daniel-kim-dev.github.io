import React from 'react';
import './About.css';

function About(props) {
  return (
    <div id="About">
      <h2 ref={props.sendRef} className="AboutHeading">About</h2>
      <p ref={props.sendRef} className="AboutParagraph">
        My name is Daniel and I am a software developer with a passion for 
        building applications that are both functional and user-friendly.
        I believe that software should not only be effective, but also enjoyable to use.
      </p>
      <p ref={props.sendRef} className="AboutParagraph2">
        I have a diploma in Computer Science and have completed courses 
        in web development, mobile app development, and database management.
        Through these experiences, I have learned the importance of writing clean, modular, and well-documented code.
        I am always eager to take on new challenges and collaborate with others to create innovative solutions to complex problems.
      </p>
      <div ref={props.sendRef} className="AboutParagraph3">
        I am proficient in:
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </div>
      <p ref={props.sendRef} className="AboutParagraph4">
        Feel free to check out my coding projects on GitHub or send me an email!
      </p>
    </div>
  );
}

export default About;