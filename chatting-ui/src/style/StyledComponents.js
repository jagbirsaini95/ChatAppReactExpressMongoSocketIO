import styled from 'styled-components';

export const Container = styled.div`
height:80vh;
form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:0px 35%;

    label {
        display:block;
        width:100%;
    }

    input {
        margin:5px 0px;
        border:1px solid blue;
        border-radius:5px;
        height:30px;
        width:100%;
        &:focus-visible {
            outline:2px solid lightblue;
        }
    }
    
}
button {
    align-self: center;
    width: 30%;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 10px 0px;
    margin: 13px;
    background-color: cornflowerblue;
    border: 2px solid transparent;
    cursor: pointer;
    color:white;

    &:hover, &:focus-visible {
        border:2px solid blue;
    }
}
.error {
    color:red;
    font-weight:500;
}
.required::after {
    content:' *';
    color:red;
}
border: 1px solid blue;

`

export const Header = styled.h2`
text-align:center;

`
export const ContainerChat = styled.div`
border: 1px solid blue;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
height:80vh;

.chat-container {
    height: 80vh;
    width: 80vw;
    border: 1px solid red;
    display:flex;
    }
`

export const ContainerContacts = styled.div`
width:30%;
border:1px solid black;
height:100%;
position:relative;
.title {
    border:1px solid red;
    text-align:center;
    font-size: 20px;
}
.contact {
    display:flex;
    align-items:center;
    justify-content:flex-start;
    cursor:pointer;
    margin: 10px 0px;
}
.username {
    margin-bottom:5px;
}
.avatar img {
    margin-right:10px;
    width:40px;
    height:40px;
    border-radius:50%;
}

.current-user, .avatar {
    display:flex;
    align-items:center;
}
.current-user {
    border:1px solid red;
    position:absolute;
    cursor:pointer;
    bottom:0;
}
.contact-list {
    overflow: auto;
    height: 85%;
    &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
          background-color: red;
          width: 0.5rem;
          border-radius: 2rem;
        }
}
.selected {
    transition:1s ease-in-out;
    background-color: black;
    color:white;
}
`

export const ContainerSetAvatar = styled.div`
height:100vh;
.avatar-list {
    height: 30vh;
    display:flex;
    justify-content:center;
    .avatar img {
        width: 100px;
        border:1px solid blue;
        cursor: pointer;
        border-radius:50%;
        margin: 5px;
        &:hover, &:focus-visible {
            border:2px solid blue;
        }
    }
}
.selected {
    border:5px solid red !important;
}
.set-avatar-btn {
    margin-top:20px;
    display:flex;
    justify-content:center;
    button {
        border-bottom-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 20px 10px;
        background-color: cornflowerblue;
        border: 2px solid transparent;
        cursor: pointer;
        color:white;
    
        &:hover, &:focus-visible {
            border:2px solid blue;
        }
    }

}

`

export const ContainerWelcome = styled.div`
height:100%;
width:80%;
border:1px solid yellow;
.bot-hi {
    display:flex;
    align-items:center;
    justify-content:center;
    img {
        border-radius:50%;
        width:75%
    }
}
.content {
    text-align:center;
    font-weight:600;
    font-size:29px;
}
`

export const ContainerChatContainer = styled.div`
height:100%;
width:80%;
border:1px solid yellow;
.chat-user {
    display:flex;
    justify-content:space-between;
    .avatar {
        margin-right:20px;
    }
}
.flex {
    display:flex;
}
.chat-input{
    margin:20px
}
.chat-messages {
    height:75%;
}
`
export const ContainerInputChat = styled.div`
height:100%;
form{
    display:flex;
    align-items:center;
    justify-content:space-around;
}
input {
    width:80%;
    height:40px;
}
button {
    height:42px;
}
`
export const ContainerLogout = styled.div`
`