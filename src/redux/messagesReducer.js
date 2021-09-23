const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [{id: 1, name: 'Alex'}, {id: 2, name: 'Alisa'}],
    messagesData: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'Yo'}, 
        {id: 3, message: 'How are you?'}, 
        {id: 4, message: 'I\'m fine, and you?'}
    ],
    messageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let addMessage = {
                id: 5,
                message: state.messageText
            };
            return {
                ...state,
                messageText: '',
                messagesData: [...state.messagesData, addMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                messageText: action.newMessage
            };
        default:
            return state;
    }

}
export default messagesReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
})

