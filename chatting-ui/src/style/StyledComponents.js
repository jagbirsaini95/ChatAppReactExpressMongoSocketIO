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
}

.error {
    color:red;
    font-weight:500;
}
.required::after {
    content:' *';
    color:red;
}
`

export const Header = styled.h2`
text-align:center;

`