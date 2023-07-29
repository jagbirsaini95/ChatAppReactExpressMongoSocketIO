import React from 'react'
import { ContainerWelcome, Header } from '../style/StyledComponents'

const Welcome = ({ currentUser }) => {
    return (
        <ContainerWelcome>
            <Header>Welcome, {currentUser?.name}</Header>
            <div className='bot-hi'>
                <img src="https://media.giphy.com/media/5k5vZwRFZR5aZeniqb/giphy.gif"></img>
            </div>
            <div className="content">
                Lets start the chat
            </div>
        </ContainerWelcome>
    )
}

export default Welcome