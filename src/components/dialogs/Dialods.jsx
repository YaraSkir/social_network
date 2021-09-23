import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './messages/Message';

const Dialogs = (props) => {

  let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  
  let messagesElement = props.messages.map(message => <Message message={message.message} key={message.id} /> );
  
  let onAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = (e) => {
  
    let text = e.target.value;
    props.onMessageChange(text);
  }

  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
          { dialogsElement }
        </div>
        <div className={styles.messages}>
           { messagesElement }
           <textarea placeholder='Enter your message' onChange={onMessageChange} value={props.messageText} />
           <div>
              <button onClick={onAddMessage}>send</button>
           </div>
        </div>
    </div>
   
    )
}

export default Dialogs;