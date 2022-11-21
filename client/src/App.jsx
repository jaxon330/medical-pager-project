import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannellListContainer, ChannelContainer, Auth} from './components';

import './App.css';

const cookies = new Cookies();

const apiKey = '2mgsptavq3ht'
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey)

if(authToken) {
  client.connectUser({
    id: cookies.get('userID'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatartURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {

  if(!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
            <ChannellListContainer>

            </ChannellListContainer>
        </Chat>
    </div>
  )
};

export default App