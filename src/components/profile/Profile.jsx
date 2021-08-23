import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return (
    <div className={styles.content}>
        <div>
            <ProfileInfo />
        </div>
        <div>
             <MyPosts posts={props.posts} 
                      newPostText={props.newPostText}
                      dispatch={props.dispatch} />
        </div>
    </div>

    );

}
export default Profile;