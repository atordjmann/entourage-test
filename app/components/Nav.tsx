import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/toolbar.module.css";

interface NavLink {
  text: string;
  path: string;
}

function Nav () {
  const [ navOpen, setNavOpen ] = useState(0)
  const [ hoverIndex, setHoverIndex ] = useState(-1)
  const navLinks: NavLink[]= [
    {
      text: 'Home',
      path: '/'
    }];

  return (
    <nav className={styles.responsive_toolbar}>
      <ul className={styles.nav }>
        <figure className={styles.figure} onClick={ () => { setNavOpen(navOpen) } }>
          <img src="/logo.svg" height="40px" width="40px" alt="logo-nav-toggler" />
        </figure>
        { navLinks.map((link, index) => 
          <li className={styles.nav_element} key={ index }
            onMouseEnter={ () => { setHoverIndex(index) } }
            onMouseLeave={ () => { setHoverIndex(-1) } } 
            style={{ background: hoverIndex === index ? '#999' : '' }}>
            <Link to={ link.path }>
              { link.text }
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav;