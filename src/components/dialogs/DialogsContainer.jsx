import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialods';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    messageText: state.messagesPage.messageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addMessage: () => {
        dispatch(addMessageActionCreator());
      },
      onMessageChange: (text) => {
        dispatch(updateNewMessageTextActionCreator(text));
      }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;