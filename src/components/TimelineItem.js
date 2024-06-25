import React from 'react';

const Timeline = () => (
  <section id="timeline">
    <h2 className="section-header">Education</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-item-content">
          <span className="date">2020</span>
          <h3 className="title">Title of the Event</h3>
          <p className="institution">Institution Name</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-content">
          <span className="date">2021</span>
          <h3 className="title">Title of the Event</h3>
          <p className="institution">Institution Name</p>
        </div>
      </div>
      {/* Add more timeline items as needed */}
    </div>
  </section>
);

export default Timeline;
