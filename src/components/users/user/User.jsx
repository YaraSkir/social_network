import React from 'react';
import styles from './User.module.css';

const User = (props) => {

    let followON = () => {
        props.follow(props.id);
    }
    let unFollowOFF = () => {
        props.unFollow(props.id);
    }

    return (
            <div>
                <img src={props.photo} className={styles.img}/>
                <div>{props.name}</div>
                <div>{props.status}</div>
                <div>{props.location.city},</div>
                <div>{props.location.country}</div>
                <div>{props.followed 
                    ? <button className={styles.follow} onClick={() => {followON()}}>FOLLOW</button> 
                    : <button className={styles.unfollow} onClick={() => {unFollowOFF()}}>UNFOLLOW</button>}
                </div>
            </div>
    )
}
export default User;