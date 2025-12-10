import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/userProfileImage.jpg';
import dayjs from 'dayjs';

export function ChatMessage({message, sender, timestamp}){

        const currentTime = dayjs(timestamp).format('h:mma');

        return(
          <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender==="robot" && <img src={RobotProfileImage }className="chat-message-profile" />}
            <div className="chat-message-text">
              {message}
              <p>{currentTime}</p>
            </div>
            {sender==="user" && <img src={UserProfileImage }className="chat-message-profile" />}
          </div>
        );

} 

console.log(UserProfileImage);

