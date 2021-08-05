import React from 'react';
import './App.css';

const Content = () => {
    return (
    <div className='content'>
            <img src='https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1'/>
        <div className='ava'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHk_4VEK76DVqS59u0_JUSXmrwmrqNweBSPg&usqp=CAU '/><br/>
           <div className='p'>
                Name: Ivan <br/>
                Surname: Ivanov <br/>
                Birthday: 02.02.2002 <br/>
                Live: Kiev <br/>
            </div>
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
    </div>
    )
}

export default Content;