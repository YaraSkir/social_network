import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import SideBar from './sidebar/SideBar';


const Nav = (props) => {
  let sideBar = props.sideBar.map(sideBar => <SideBar sideBar={sideBar.name} />);
    return (
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
        </div>
        <div className={styles.item}> 
          <NavLink to='settings' activeClassName={styles.active}>Settings</NavLink>
        </div>
        <div className={styles.sideBar}>
           { sideBar }
        </div>

      </nav>
    )
}

export default Nav;