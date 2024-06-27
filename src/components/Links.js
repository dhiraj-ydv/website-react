import React from 'react';

const Links = () => (
  <section id="links" className="bg-white p-4">
    <h2 className="text-2xl font-semibold mb-4">LINKS</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-medium mb-2">Subdomains</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://devportfolio.dhiraj.me" className="text-blue-600 hover:underline inline-flex items-center">
              Developer Portfolio
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://blog.dhiraj.me" className="text-blue-600 hover:underline inline-flex items-center">
              Blog
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">Projects</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://dhiraj.me/subdir-demo-project/" className="text-blue-600 hover:underline inline-flex items-center">
              Demo project testing subdir
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">Other</h3>
        <ul className="space-y-2">
          <li>
            <a href="/my-pickem" className="text-blue-600 hover:underline inline-flex items-center">
              My PICKEM for Champions Tour 2024: Pacific Stage 1
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Links;
