import React from 'react';

const Blog = () => (
  <section id="blog" className="p-4 bg-white">
    <h2 className="section-header">Blog</h2>
    <article className="mb-4">
      <a href="https://blog.dhiraj.me/posts/blog1/" className="section-subheader text-blue-600 hover:underline inline-flex items-center">
        How will E-Rupee fit into the digital payments space of India when we already have UPI?
        &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
      </a>
      <p className="text-sm text-gray-600">Posted On: 01/04/24</p>
    </article>
    <article className="mb-4">
      <a href="https://blog.dhiraj.me/posts/blog2/" className="section-subheader text-blue-600 hover:underline inline-flex items-center">
        List of my favorite Anime
        &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
      </a>
      <p className="text-sm text-gray-600">Posted On: 03/02/24</p>
    </article>
    <br />
    <div className="mt-6">
      <a href="https://blog.dhiraj.me/" className="read-more-link text-blue-600 hover:underline inline-flex items-center font-bold">
        Read More
        &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
      </a>
    </div>
  </section>
);

export default Blog;
