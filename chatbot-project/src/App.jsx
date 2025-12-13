import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import { useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'

function App(){

       const [isLoading, setIsLoading] = useState(false);
       const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

       useEffect(()=>{
        Chatbot.addResponses({
          'goodbye' : 'Goodbye. Have a great day!',
          'give me a unique id' : function() {
            return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
          },
          'shut up' : 'you shut up'
        })
       },[])

       useEffect(()=>{
        localStorage.setItem('messages', JSON.stringify(chatMessages));
       }, [chatMessages]);


        return(
          <div className="app-container">
            <p className="welcome-paragraph">
              {chatMessages.length===0 ? 'Welcome to the chatbot project! Send a message using the textbox below.' : '' }
            </p>
            <ChatMessages
              chatMessages={chatMessages}
             />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
             />
          </div>
        );
        
      }

export default App
