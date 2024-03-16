import React from 'react'
import './Chat.css'
const Chat = ({response}) => {
  return (
    <div className='chat-box'>
      <div>
        {response}
      </div>
    </div>
  )
}

export default Chat
