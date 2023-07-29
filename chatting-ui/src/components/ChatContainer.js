import React from 'react'
import { ContainerChatContainer, Header } from '../style/StyledComponents'
import InputChat from './InputChat'
import LogOut from './LogOut'

function ChatContainer({ currentChat,currentUser }) {
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
                <InputChat />
            </div>
        </ContainerChatContainer>
    )
}

export default ChatContainer