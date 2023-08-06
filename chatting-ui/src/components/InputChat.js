import React, { useState } from 'react'
import { Formik } from 'formik';
import { ContainerInputChat } from '../style/StyledComponents';
import EmojiPicker from 'emoji-picker-react';
import smileLogo from '../style/smile.png'
function InputChat({ handleSendMessage }) {
    const [msg, setMsg] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);

    const handleEmojiClick = (e, emojiObject) => {
        let message = msg;
        message += e.emoji;
        setMsg(message);
    };

    const handleChange = (e) => {
        setMsg(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(msg)
        setShowEmoji(false);
        setMsg('');
    }
    return (
        <ContainerInputChat>
            <form onSubmit={handleSubmit}>
                {
                    showEmoji &&
                    <div className="emoji-picker" >
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                }
                <img src={smileLogo} onClick={() => setShowEmoji(!showEmoji)} alt='smile' />
                <input
                    required
                    type="text"
                    onChange={handleChange}
                    value={msg}
                    placeholder='enter your message here...'
                />
                <button type="submit">Send</button>
            </form>
        </ContainerInputChat>
    )
}

export default InputChat