import React from 'react';
import styles from './sideBar.module.css';

const SideBar = (props) => {
    return (
    <div>
        <div className={styles.sideBarItem}>
            <img src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' />
            <div>
                {props.sideBar}
            </div>
        </div>
    </div>
    )
}

export default SideBar;