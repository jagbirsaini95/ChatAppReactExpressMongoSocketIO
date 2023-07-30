import React from 'react'
import { ContainerWelcome, Header } from '../style/StyledComponents'
import LogOut from './LogOut'

const Welcome = ({ currentUser }) => {
    return (
        <ContainerWelcome>
            <div className="log-out">
                <LogOut currentUser={currentUser} />
            </div>
            <Header>Welcome, {currentUser?.name}</Header>
            <div className='bot-hi'>
                <img src="https://media.giphy.com/media/5k5vZwRFZR5aZeniqb/giphy.gif" alt='bot'></img>
            </div>
            <div className="content">
                Lets start the chat
            </div>
        </ContainerWelcome>
    )
}

export default Welcome