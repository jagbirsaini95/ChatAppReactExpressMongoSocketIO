import React, { useState } from 'react'
import { ContainerSetAvatar, Header } from '../style/StyledComponents';
import { useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { setAvatar } from '../services/services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SetAvatar() {
    const navigate = useNavigate();
    const api = `https://api.multiavatar.com/4456655`;
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const handleSetAvatar = async () => {
        const user = JSON.parse(
            localStorage.getItem('chat-app-logged-user')
        );

        const { data } = await setAvatar(user._id, avatars[selectedAvatar]);

        if (data.status) {
            user.isAvatarImageSet = true;
            user.avatarImagePath = data.image;
            localStorage.setItem(
                'chat-app-logged-user',
                JSON.stringify(user)
            );
            console.log(user);
            navigate("/");
        } else {
            toast.error("Error setting avatar. Please try again.");
        }
    }

    const handleSelectAvatar = (i) => {
        setSelectedAvatar(i);
    }

    useEffect(() => {
        const user = JSON.parse(
            localStorage.getItem('chat-app-logged-user')
        );
        if (!user) {
            navigate('/login');
        }
        // const avatarsList = getAvatars();
        const getAllAvatars = async () => {
            const data = [];
            for (let i = 0; i < 5; i++) {
                const image = await axios.get(
                    `${api}/${Math.round(Math.random() * 10)}`
                );
                const buffer = new Buffer(image.data);
                data.push(buffer.toString("base64"));
            }
            setAvatars(data);
            setIsLoading(false);
        }
        getAllAvatars();
    }, []);
    return (
        <ContainerSetAvatar>
            <Header>
                Pick one image for your Profile!!
            </Header>
            <div className='avatar-list'>
                {avatars.length > 0 && avatars.map((avatar, index) => {
                    return (
                        <div
                            className={`avatar `}
                        >
                            <img
                                className={`${selectedAvatar === index ? "selected" : ""}`}
                                src={`data:image/svg+xml;base64,${avatar}`}
                                alt="avatar"
                                key={avatar}
                                onClick={() => handleSelectAvatar(index)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='set-avatar-btn'>
                <button onClick={handleSetAvatar}>
                    Set Avatar
                </button>
            </div>
        </ContainerSetAvatar>
    )
}

export default SetAvatar;