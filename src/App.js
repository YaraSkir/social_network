import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile';
import { Route } from 'react-router-dom';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import News from './components/news/News';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavContainer from './components/navbar/NavContainer';
import UsersContainer from './components/users/UsersContainer';



const App = () => {
  return (
   
    <div className='app-wrapper'>
       <Header />
       <NavContainer />
       <div className='app-wrapper-content'>
         <Route path='/dialogs' render={ () => <DialogsContainer />} />
         <Route path='/profile' render={ () => <Profile />}/>
         <Route path='/music' render={ () => <Music />}/>
         <Route path='/news' render={ () => <News />}/>
         <Route path='/users' render={ () => <UsersContainer />}/>
         <Route path='/settings' render={ () => <Settings />}/>
       </div>
    </div>
   
  );
}

export default App;

