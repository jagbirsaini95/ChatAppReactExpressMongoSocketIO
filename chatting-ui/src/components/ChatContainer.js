import React, { useEffect, useState } from 'react'
import { ContainerChatContainer, Header } from '../style/StyledComponents'
import InputChat from './InputChat'
import LogOut from './LogOut'
import { getMessages, sendMessage } from '../services/services'

function ChatContainer({ currentChat, currentUser }) {
    const [messages, setMessages] = useState(null);
    const handleSendMessage = async (msg) => {
        await sendMessage({
            from: currentUser._id,
            to: currentChat._id,
            message: msg
        })
        const msgs = [...messages];
        msgs.push({ fromSelf: true, message: msg })
        setMessages(msgs);
    }
    useEffect(() => {
        const getMessage = async () => {
            const res = await getMessages({
                from: currentUser._id,
                to: currentChat._id,
            });
            setMessages(res.data.data)
        }
        getMessage();
    }, [currentChat])

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
                {
                    messages?.map((msg, i) => {
                        return <div key={i} className={`${msg.fromSelf ? 'right' : 'left'}`}>
                            {msg.message}
                        </div>
                    })
                }
                {/* <div className="left">
                    left
                </div>
                <div className="right">
                    right
                </div>
                <div className="center">
                    center
                </div> */}
            </div>
            <div className="chat-input">
                <InputChat handleSendMessage={handleSendMessage} />
            </div>
        </ContainerChatContainer>
    )
}

export default ChatContainer