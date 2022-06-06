import styled from "styled-components";


export const ProfileStyled = styled.section`

    padding:20px;
    overflow-y: scroll;
    height: 100vh;

    .title{
        margin-top: 20px;
        margin-bottom: 16px;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        color:#616364;
        font-family: "Inter",sans-serif;
    }

    .profile-wrapper{
        background-color: #fff;
        width:100%;
        border-radius:8px;
    }

    .profile-info{
        display: flex; 
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding:20px;
        gap: 20px;
        align-items: center;
    }

    .profile-info > img{
        width:90px;
        height:90px;
        border-radius: 1000px;
    }

    .profile-info > button{
        width:230px;
        height:45px;
        padding:10px;
        font-weight:bold;
        outline:none;
        border:none;
        border-radius:8px;
        background-color: rgb(124, 65, 255);
        color:white;
        cursor: pointer;
        font-size: inherit;
        font-family: "Inter",sans-serif;

    }

    .profile-info > button:hover{
        background-color:rgb(128, 133, 237);
    }

    .input_wrapper{
        padding:15px;
    }

    .username{
        background: transparent;
        font-weight: 400;
        border: 0;
        color: #282f37;
        outline: none;
        cursor: text;
        display: block;
        width: 95%;
        line-height: 32px;
        margin: 5px;
        font-size: 16px;
        font-family: "Inter",sans-serif;
        border-bottom:1px solid #616364;
    }

    textarea{
        display: block;
        position: relative;
        padding: 8px 12px;
        border: 0px;
        border-radius: 4px;
        outline: 1px solid #616364;
        width: 95%;
        resize: none;
        font-family: "Inter",sans-serif;
        font-size: 16px;
        margin-top:2.5rem;
        margin-bottom: 1.2rem;
        padding:15px;

    }

    .button_wrapper{
        display: flex;
        justify-content: center;
        margin-top: 3.5rem;

    }

    .alert{
        text-align: center;
        margin:0px;
        color:#d9534f;
        font-weight: 500;
    }

    .email{ 
        margin-top:12px;
    }

    .second{
        margin-top: 2rem;
    }

    .third{
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    .update{
        margin-top:2.5rem;
    }

`