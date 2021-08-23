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
                      //addPost={props.addPost} 
                      newPostText={props.newPostText} 
                      //updateNewPostText={props.updateNewPostText} 
                      dispatch={props.dispatch} />
        </div>
    </div>

    );

}
export default Profile;