import React, { useEffect, useState } from 'react'
import { ContainerChatContainer, Header } from '../style/StyledComponents'
import InputChat from './InputChat'
import LogOut from './LogOut'
import { getMessages, sendMessage } from '../services/services'

function ChatContainer({ currentChat, currentUser }) {
    const [messages, setMessages] = useState(null);
    const handleSendMessage = async (msg) => {
        const res = await sendMessage({
            from: currentUser._id,
            to: currentChat._id,
            message: msg
        })
        console.log(res, 'res');
    }
    const getMessage = async () => {
        return await getMessages({
            from: currentUser._id,
            to: currentChat._id,
        });
    }
    useEffect(() => {
        const res = getMessage();
        console.log(res, "res");
    }, [])

    return (
        <ContainerChatContainer>
            <Header>
                <div onClick={() => { }} className={`chat-user`}>
                    <div className='flex'>
                        <div className="avatar">
                            <img
                                src={`data:image/svg+xml;base64,${currentChat.avatarImagePath}`}
                                alt='avatar'
                            />
                        </div>
                        <div className="username">
                            {currentChat.userName}
                        </div>
                    </div>
                    <div className="log-out">
                        <LogOut currentUser={currentUser} />
                    </div>
                </div>
            </Header>
            <div className="chat-messages">

            </div>
            <div className="chat-input">
                <InputChat handleSendMessage={handleSendMessage} />
            </div>
        </ContainerChatContainer>
    )
}

export default ChatContainer