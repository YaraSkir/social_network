import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
   
        <div className={styles.post}>
            <img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
            {props.message}
           <div>
                {props.like} <span>likes</span>
          </div>
        </div>
        
    )
}

export default Post;