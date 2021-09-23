import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let store = {
    _state: {
        profilePage: {
            postData: [{id: 1, message: 'Hello', like: 3}, 
                       {id: 2, message: 'I am crazy', like: 48}],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Alisa'}],
            messagesData: [
                {id: 1, message: 'Hi'}, 
                {id: 2, message: 'Yo'}, 
                {id: 3, message: 'How are you?'}, 
                {id: 4, message: 'I\'m fine, and you?'}
            ],
            messageText: ''
        },
        sideBar: [
            {name: 'Alex'}, 
            {name: 'Alisa'}, 
            {name: 'Andrey'}
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },  
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber();

        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber();
    }
        
}

window.store = store;

export default store;