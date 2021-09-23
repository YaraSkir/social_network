import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    
    let postsElement = props.postData.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);
    }

    return ( 
        <div>  
            My Posts 
            <div className={styles.newPost}> 
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    <div className={styles.button}>
                        <button onClick={ onAddPost } className={styles.buttonAdd}>Add post</button>
                    </div>
            </div>
            <div className={styles.posts}>
                 { postsElement }
            </div>
        </div>
    
    )
}

export default MyPosts;


