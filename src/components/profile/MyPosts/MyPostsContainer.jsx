import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

/*const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action); 
    }

    return (
        <MyPosts addPost={addPost} 
                 updateNewPostTextActionCreator={onPostChange} 
                 postData={props.store.profilePage.postData} 
                 //posts={props.posts} 
                 newPostText={props.store.newPostText}
                 dispatch={props.dispatch} />
    )
}
*/
let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostTextActionCreator: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action); 
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
