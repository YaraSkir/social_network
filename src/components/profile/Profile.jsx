import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {
    
    return (
    <div className={styles.content}>
        <div>
            <ProfileInfo />
        </div>
        <div>
             <MyPostsContainer //store={props.store} dispatch={props.dispatch}
              />
        </div>
    </div>

    );

}
export default Profile;