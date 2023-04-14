import React from "react";
import styled from "styled-components";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Chat() {
    const roomId = useSelector(selectRoomId);
    const roomsRef = roomId &&  doc(db, "rooms", roomId);
    const messagesRef  = roomId && collection(db,"rooms",roomId,"messages")
    const [roomDetails] = useDocumentData(roomsRef);
    const [roomMessages] = useCollection(messagesRef)

    console.log(roomMessages)
    console.log(roomDetails?.channel_name)
    return (
        <ChatContainer>
            <>
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
            {/* List out messages */}
            </ChatMessages>

            <ChatInput
            channelName={roomDetails?.channel_name}
            channelId={roomId}
            />
            </>
        </ChatContainer>
    );
}

export default Chat;

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
