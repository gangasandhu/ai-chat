import { useState } from 'react'

import OpenAI from "openai";

import './App.css'
import { chat, getImage } from './services/chat';
import Chat from './components/Chat';


function App() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [chats, setChats] = useState([])
  const [imgUrl, setImgUrl] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  }
  const getChat = async (e) => {
    e.preventDefault()
    setResponse("loading")
    setChats(prevChat => [...prevChat, message])
    const response = await chat(message);
    setResponse(response)
    setChats(prevChat => [...prevChat, response])
    setResponse("")
    setMessage("");

  }

  const genImg = async (e) => {
    e.preventDefault()

    setResponse("loading")
    const response = await getImage(message)
    setResponse(response)
    setImgUrl(response)

  }



  return (
    <div className='container'>
      <h1>Ask me Anything you can think of!</h1>
      {chats.map((chat, i) =>
        <Chat key={i} response={chat} />
      )}
      {response == "loading" && "Waiting for response..."}
      {imgUrl && imgUrl}
      <form >
        <input onChange={handleChange} type='text' value={message} />
        <button onClick={getChat} >Send</button>
        <button onClick={genImg} >Generate Image</button>

      </form>
    </div>
  )
}

export default App
