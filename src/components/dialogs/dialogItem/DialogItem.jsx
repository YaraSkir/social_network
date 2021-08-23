import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div className={styles.dialog}>
                <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;