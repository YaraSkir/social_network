import React from 'react';

import './App.css';
import Nav from './components/navbar/Nav.jsx';
import Header from './components/header/Header.jsx';
import Dialogs from './components/dialogs/Dialods';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import News from './components/news/News';



const App = (props) => {
  return (
   
    <div className='app-wrapper'>
       <Header />
       <Nav sideBar={props.store.sideBar} />
       <div className='app-wrapper-content'>
         <Route path='/dialogs' render={ () => <Dialogs 
              dialogs={props.store.messagesPage.dialogsData} 
              messages={props.store.messagesPage.messagesData} 
              addMessage={props.addMessage} 
              updateNewMessage={props.updateNewMessage} 
              messageText={props.store.messagesPage.messageText} />} />
         <Route path='/profile' render={ () => <Profile 
              posts={props.store.profilePage.postData}
              newPostText={props.store.profilePage.newPostText} 
              dispatch={props.dispatch} />}/>
         <Route path='/music' render={ () => <Music />}/>
         <Route path='/news' render={ () => <News />}/>
         <Route path='/settings' render={ () => <Settings />}/>
       </div>
    </div>
   
  );
}

export default App;

