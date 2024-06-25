import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-gray-100 p-4">
    <h2 className="section-header">Contact</h2>
    <form>
      <div className="form-group" action="https://formspree.io/f/mleqynkr" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  </section>
);

export default Contact;
