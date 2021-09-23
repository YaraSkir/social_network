import React from 'react';
import User from './user/User';


const Users = (props) => {

    let userElement = props.users.map(u => <User followed={u.followed} key={u.id} id={u.id} name={u.name} follow={props.follow} unFollow={props.unFollow} status={u.status} photo={u.photoUrl} location={u.location}/>)

    return (
        <div>
            {userElement}
        </div>
    )
}
export default Users;