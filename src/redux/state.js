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

    addMessage() {
        let addMessage = {
            id: 5,
            message: this._state.messagesPage.messageText
        }
        this._state.messagesPage.messagesData.push(addMessage);
        this._state.messagesPage.messageText = '';
        this._callSubscriber();
    },
    updateNewMessage(newMessage) {
        this._state.messagesPage.messageText = newMessage;
        this._callSubscriber();
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                like: 24
            };
           
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
           
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export default store;