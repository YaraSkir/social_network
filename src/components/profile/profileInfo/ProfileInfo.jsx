import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
    <div className={styles.content}>
            <img src='https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1'/>
        <div className={styles.ava}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHk_4VEK76DVqS59u0_JUSXmrwmrqNweBSPg&usqp=CAU '/><br/>
           <div className={styles.p}>
                Name: Ivan <br/>
                Surname: Ivanov <br/>
                Birthday: 02.02.2002 <br/>
                Live: Kiev <br/>
            </div>
        </div>
    </div>
    );
}

export default ProfileInfo;