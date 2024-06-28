import React from 'react';

const TimelineItem = ({ year, title, institution }) => (
  <li className="timeline-item">
    <div className="date">{year}</div>
    <div className="title">{title}</div>
    <div className="institution">{institution}</div>
  </li>
);

const About = () => (
  <section id="about">
    <div className="space-y-4">
      <h3 className="section-header">Hi, I'm Dhiraj Yadav!</h3>
      <p className="section-content">
        I'm enthusiastic about learning and discussing technology, polity and governance, 
        cosmology, sociology, and qualitative fundamental analysis. I also enjoy playing tactical FPS games and have a growing interest in sports that require high level of athleticism, such as badminton and football. Feel free to explore my blog for more insights.
      </p>
      <div>
        <h4 className="section-subheader">EDUCATION</h4>
        <ul className="timeline">
          <TimelineItem year="2023" title="BCA" institution="Manipal University Jaipur" />
          <TimelineItem year="2020" title="Senior-Secondary Education" institution="Matrix Sikar" />
          <TimelineItem year="2018" title="Secondary Education" institution="Podar GPS" />
        </ul>
      </div>
    </div>
  </section>
);

export default About;
