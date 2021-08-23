import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    
    let postsElement = props.posts.map(post => <Post message={post.message} like={post.like} />);
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        
    }

    return ( 
<div>  
    My Posts 
<div className={styles.newPost}> 
    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
<div className={styles.button}>
    <button onClick={ addPost } className={styles.buttonAdd}>Add post</button>
    <button className={styles.buttonRemove}>Remove post</button>
</div>
 </div>
  <div className={styles.posts}>
     { postsElement }
  </div>
</div>
    
    )
}

export default MyPosts;


