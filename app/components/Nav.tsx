import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/toolbar.module.css";

interface NavLink {
  text: string;
  path: string;
}

function Nav () {
  const [ hoverIndex, setHoverIndex ] = useState(-1)
  const navLinks: NavLink[]= [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Movies',
      path: '/movies'
    }];

  return (
    <nav className={styles.toolbar}>
      <ul className={styles.nav }>
        <div className={styles.app_logo}>
          <figure className={styles.figure}>
            <img src="/logo.svg" height="40px" width="40px" alt="logo-nav-toggler" />
          </figure>
        <span className={styles.app_title}>Lost</span>
        </div>
        { navLinks.map((link, index) => 
          <li className={styles.nav_element} key={ index }
            onMouseEnter={ () => { setHoverIndex(index) } }
            onMouseLeave={ () => { setHoverIndex(-1) } } 
            style={{ background: hoverIndex === index ? '#999' : '' }}>
            <Link to={ link.path } className={styles.nav_link}>
              { link.text }
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav;