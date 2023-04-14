import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Message from "./Message";


function Chat() {
    const roomId = useSelector(selectRoomId);

    const roomsRef = roomId &&  doc(db, "rooms", roomId);
    const messagesRef  = roomId && query(collection(db,"rooms",roomId,"messages"),orderBy("timestamp","asc"));
    const chatRef = useRef(null)

    const [roomDetails] = useDocumentData(roomsRef);
    const [roomMessages,loading] = useCollection(messagesRef)

useEffect(()=>{
    chatRef?.current?.scrollIntoView({behavior: 'smooth'})
},[roomId,loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages &&
            ( <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.channel_name}</strong>
                        </h4>
                        <StarOutlineIcon/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon/>
                            Details
                        </p>
                    </HeaderRight>
                </Header>
    
                <ChatMessages>
                {roomMessages?.docs.map(doc =>
                    {
                        const {message,timestamp,user,userImage} = doc.data()
    
                        return (
                            <Message user_message={message} message_timestamp={timestamp} user_name={user}
                            userImage={userImage}
                            >
    
                            </Message>
                        )
                    })}
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>
    
                <ChatInput
                channelName={roomDetails?.channel_name}
                channelId={roomId}
                chatRef={chatRef}
                />
    
                </>)}
           
        </ChatContainer>
    );
}

export default Chat;

const ChatBottom = styled.div`
padding-bottom: 120px;
`

const Header = styled.div `
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div `
display: flex;
align-items: center;


>h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;

>h4>.MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }
}
`;
const HeaderRight = styled.div `
>p{
    display: flex;
    align-items: center;
    font-size: 14px;

>p>.MuiSvgIcon-root{
    margin-right: 5px !important;
    font-size: 16px;
}
}
`;

const ChatContainer = styled.div `
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.div`

`
