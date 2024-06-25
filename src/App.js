import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Links from './components/Links'; // Add the Links component
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Blog />
        <Links /> {/* Add the Links section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
