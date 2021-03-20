import React from 'react';
import  Navibar  from './Navibar.js' ;

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">LOGO</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navibar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          9811648684
        </section>
        <section className="header-bottom__email">
          tavish0409@gmail.com
        </section>
      </section>
    </section>
  )
}

export default Header;
