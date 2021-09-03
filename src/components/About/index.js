import React from 'react';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Scott Percy</h1>
      <div>
        <img src={require('../../assets/profile_pic.jpg')} alt="about-me" className="profile" />
      </div>
      <div className="my-2">
        <p>
        My name is Scott Percy.  I am a born and raised Newfoundlander and I currently live in Torbay Newfoundland 
        a small town just outside St John’s.  I have a degree in Geology and an IT Diploma from 
        Memorial University of Newfoundland.   For the last 14 years I have been employed as a 
        User Support Geoscientist supporting Geoscience applications focused on Workflow development 
        for the Geoscience community.
                        
        I decided to make a career change to a one of my interests web development and I am currently enrolled in 
         Coding Bootcamp through the University of Toronto.  Some of the skills I have gained 
        so far are HTML, Git, CSS and Javascript with many more to follow.
        </p>
      </div>
    </section>
  );
}

export default About;
