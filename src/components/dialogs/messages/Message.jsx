import React from 'react';
import styles from './Message.module.css';


const Message = (props) => {
    return (
        <div className={styles.message}>
            <img src='https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340' />
            <div className={styles.item}>
                    {props.message}
            </div>
        </div>
    )    
}

export default Message;