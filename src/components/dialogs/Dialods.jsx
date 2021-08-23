import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './messages/Message';

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElement = props.messages.map(message => <Message message={message.message} /> );
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessage(text);
  }

  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
          { dialogsElement }
        </div>
        <div className={styles.messages}>
           { messagesElement }
           <textarea ref={newMessageElement} onChange={onMessageChange} value={props.messageText} />
           <button onClick={addMessage}>send</button>
        </div>
    </div>
   
    )
}

export default Dialogs;