import styled from 'styled-components';

export const Container = styled.div`
height:100vh;
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
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
height:97.5vh;

.chat-container {
    height: 100vh;
    width: 90vw;
    border: 1px solid red;
    display:flex;
    }
`

export const ContainerContacts = styled.div`
width:30%;
height:100%;
position:relative;
.title {
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
    position:absolute;
    width:100%;
    cursor:pointer;
    bottom:0;
    height:10%;
    background-color:#e31f1f;
    color:blanchedalmond;
    .avatar img {
        border:2px dotted blue;
        // margin-right:4px;
    }
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
    transition:0.5s ease-in-out;
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
.log-out {
    position: fixed;
    right: 10px;
}
`

export const ContainerChatContainer = styled.div`
height:100%;
width:80%;
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
.log-out {
    margin-right:25px;
}
.chat-input{
    // margin:20px
}
.chat-messages {
    height:80%;
    display:flex;
flex-direction:column;    
gap:1rem;
    div {
        border:1px solid red;
        max-width: 40%;
        overflow-wrap: break-word;
        color:white;
        margin:0 2rem;
        padding:0.3rem 1rem;
        border-radius:10px;
    }
    .left {
        background-color: red;
        align-self:flex-start;
        border-top-left-radius:0px;
    }
    .center {
        align-self:center;
        color:red;
    }
    .right {
        background-color: green;
        border-bottom-right-radius:0px;
        align-self:flex-end;
    }
}
`
export const ContainerInputChat = styled.div`
height:100%;
position:relative;
form{
    display:flex;
    align-items:center;
    justify-content:space-around;
}
input {
    width:80%;
    height:40px;
}
img{
    width:50px;
    cursor:pointer;
    border-radius:50%;
    border: 2px solid transparent;
    &:hover, &:focus-visible {
        border:2px solid blue;
    }
}
.emoji-picker {
    // transition:0.5s ease-in-out;
    position:absolute;
    left:0;
    bottom:60px;
    // border:1px solid blue;
    box-shadow:10px 10px 10px grey;
}
button {
    width:20%;
    height:45px;
    background-color: cornflowerblue;
    border: 2px solid transparent;
    cursor: pointer;
    color:white;

    &:hover, &:focus-visible {
        border:2px solid blue;
    }
}
`
export const ContainerLogout = styled.div`
button {
    height:50px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: cornflowerblue;
    border: 2px solid transparent;
    cursor: pointer;
    color:white;

    &:hover, &:focus-visible {
        border:2px solid blue;
    }
}
`