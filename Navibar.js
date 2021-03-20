import React from 'react';

import './Navbar.css'

function Navibar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item"> Home</a>
      <a href="/about" className="navbar-item"> About </a>
      <a href="/Resume" className="navbar-item"> Resume </a>
      <a href="/college" className="navbar-item" >College </a>
      <a href="/blog" className="navbar-item"> Blog </a>
      <a href="/contact" className="navbar-item"> Contact </a>
  </section>
  )

}

export default Navibar;
