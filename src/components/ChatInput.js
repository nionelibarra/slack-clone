import { Button } from '@mui/material'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { db } from '../firebase/firebase'

function ChatInput({channelId}) {
const inputRef = useRef(null)

const sendMessage = (e) =>
{
    e.preventDefault(); // prevents refresh from occuring 
    if(channelId)
    {
        return false
    }
    
}

  return (
    <ChatInputContainer>
        <form >
            <input ref={inputRef} type="text" placeholder={`Message Room`}/>
            <Button style={{display:'none'}} type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;

>form{
    position: relative;
    display: flex;
    justify-content: center;
}

>form>input{
    position: fixed;
    bottom: 40px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline:none;
}
`