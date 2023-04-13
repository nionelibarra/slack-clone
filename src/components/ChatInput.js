import {Button} from '@mui/material'
import React, {useState} from 'react'
import styled from 'styled-components'
import {db} from '../firebase/firebase'
import {serverTimestamp, addDoc, collection} from 'firebase/firestore'


function ChatInput({channelId}) {
    const [input, setInput] = useState(null)
  

    const sendMessage = (e) => {
        e.preventDefault(); // prevents refresh from occuring
      
        if (!channelId) {
            return false
        }


        /*addDoc is used to add a new document to the messages subcollection of the rooms/channelId document. The second argument passed to addDoc is an object containing the data you want to add to the new document, which includes message, timestamp, user, and userImage fields. The addDoc method will automatically generate a new document ID and add the data to the new document. This is simpler than manually specifying a document ID, as you did in the original code snippet, and it ensures that the document reference path has an even number of segments. */
        addDoc(collection(db, "rooms", channelId, "messages"), {
            message: input,
            timestamp: serverTimestamp(),
            user: "Neyo Ibarra",
            userImage: "https://i.pinimg.com/originals/b6/e6/99/b6e699704a4319e1417db280b1908621.jpg"
          });

        setInput("")

    }

    return (
        <ChatInputContainer>
            <form>
                <input 
                    value={input}
                    onChange={
                        e => setInput(e.target.value)
                    }
                    type="text"
                    placeholder={`Message Room`}/>
                <Button style={
                        {display: 'none'}
                    }
                    type="submit"
                    onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div `
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
