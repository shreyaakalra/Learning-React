import { useState } from 'react'
import LoadingGif from '../assets/loading-spinner-1.gif';
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}){

        const [inputText, setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }

        async function sendMessage(){

          if(isLoading || inputText === ""){
            return;
          }
          setIsLoading(true);

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            },
            {
              message: <img src={LoadingGif}
              className="loading-gif" />,
              sender: "robot",
              id: "loading",
            }
          ];

          setChatMessages(newChatMessages);
          setInputText('');
          

          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages.filter(msg => msg.id != "loading"),
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          setIsLoading(false);
        }

        function clickKeys(e){
          const key = e.key;
          if(key==='Enter'){
            sendMessage();
          }
          else if(key=='Escape'){
            setInputText('');
          }
        }

        return(
          <div className="chat-input-container">
            <input 
              type="text"
              placeholder="Send a message to the Chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={clickKeys}
              className="chat-input"
            />
            <button
              onClick={sendMessage}
              className="send-button"
            >Send
            </button>
          </div>
        );
      }