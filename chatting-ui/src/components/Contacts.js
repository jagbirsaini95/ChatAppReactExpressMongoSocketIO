import React, { useEffect, useState } from 'react'
import { getContacts } from '../services/services'
import { ContainerContacts, Header } from '../style/StyledComponents';

function Contacts({ currentUser, contacts, handleCurrentChat }) {
    const [currentSelected, setCurrentSelected] = useState(null);
    console.log(contacts);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index)
        handleCurrentChat(contact)
    }

    return (<>
        {currentUser && <ContainerContacts>
            <div className='title'> Contacts</div>
            <div className="contact-list">
                {
                    contacts.map((contact, index) => {
                        return (

                            <div onClick={() => changeCurrentChat(index, contact)} className={`contact ${index === currentSelected ? 'selected' : ''}`} key={index}>
                                <div className="avatar">
                                    <img
                                        src={`data:image/svg+xml;base64,${contact.avatarImagePath}`}
                                        alt='avatar'
                                    />
                                </div>
                                <div className="username">
                                    {contact.userName}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="current-user" onClick={() => { console.log(currentUser) }}>
                <div className="avatar">
                    <img
                        src={`data:image/svg+xml;base64,${currentUser.avatarImagePath}`}
                        alt="avatar"
                    />
                </div>
                <div className="current-username">
                    <h3>{currentUser.userName}</h3>
                </div>
            </div>
        </ContainerContacts>}
    </>
    )
}

export default Contacts;