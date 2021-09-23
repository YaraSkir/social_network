const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
            {id: 1, 
            name: 'Alex', 
            followed: true,
            status: 'Hello everybody!',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
            photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg'
            }, 
            {id: 2, 
            name: 'Hans', 
            followed: false,
            status: 'I\'\m looking for a job',
            location: {
                city: 'Berlin',
                country: 'Germany'
            },
            photoUrl: 'https://politrada.com/upload/iblock/a93/a93478ef12afb6334ddc314b243af358.png'
            },
            {id: 3, 
            name: 'Charley', 
            followed: true,
            status: 'I\'\m a boss',
            location: {
                city: 'London',
                country: 'England'
            },
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwEscd1dL5FIjUJ-RMDPqWWJifBkTxchwGw&usqp=CAU'
            }
        ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                return u;
                })
            }
        default: 
            return state;

    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;
