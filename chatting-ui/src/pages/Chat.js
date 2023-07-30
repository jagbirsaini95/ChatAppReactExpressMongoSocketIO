import React, { useEffect, useState } from 'react'
import { ContainerChat, Header } from '../style/StyledComponents';
import Contacts from '../components/Contacts';
import { useNavigate } from 'react-router-dom';
import { getContacts } from '../services/services';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';

function Chat() {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    const [currentUser, setCurrentUser] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    useEffect(() => {
        const user = JSON.parse(
            localStorage.getItem('chat-app-logged-user')
        );
        if (!user) {
            navigate('/login');
        } else {
            setCurrentUser(user)
            const getallcontacts = async () => {
                const response = await getContacts(user._id);
                if (response.status) {
                    setContacts(response.data.data);
                }
            }
            getallcontacts();
        }
    }, [])

    const handleCurrentChat = (chat) => {
        setCurrentChat(chat);
    }
    return (
        <ContainerChat>
            <div className="chat-container">
                <Contacts handleCurrentChat={handleCurrentChat} contacts={contacts} currentUser={currentUser} />
                {
                    currentChat ?
                        <ChatContainer currentUser={currentUser} currentChat={currentChat} /> :
                        <Welcome currentUser={currentUser} />
                }
            </div>
        </ContainerChat>
    )
}

export default Chat     