import React from 'react'
import styled from 'styled-components'

function Message({user_message,message_timestamp,user_name,userImage}) {
  return (
    <MessageContainer>
        <img src={userImage} alt="" />
        <MessageInfo>
            <h4>
                {user_name}
                {' '}
                <span>
                    {new Date(message_timestamp?.toDate()).toUTCString()}
                </span>
            <p>{user_message}</p>
            </h4>
        </MessageInfo>

    </MessageContainer>
  )
}

export default Message


const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;


>img{
    height: 50px;
    border-radius: 8px;
}
`

const MessageInfo = styled.div`
padding-left: 10px;

> h4 > span{
    color: grey;
    font-weight:300;
    margin-left:40px;
    font-size: 10px;
}

`