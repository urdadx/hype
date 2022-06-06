import styled from "styled-components";

export const NavbarStyled = styled.section`

    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    justify-content: flex-start;
    height: 64px;
    padding: 0px 35px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(218, 222, 224);
    transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
    font-family: "Inter", sans-serif;

    div{
        padding-top:25px;
    }


    .link{
        font-size:16px;
        text-decoration: none;
        margin: 0px 40px 0px 0px;
        font-weight: 400;
        tab-size: 4;
        letter-spacing: .02em;
        display: flex;
        color: #12223C;
    }


`

export const InputStyled = styled.section`
    display: block;
    -webkit-box-align: stretch;
    -webkit-box-pack: start;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 10px 35px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(218, 222, 224);
    transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
    font-family: "Inter", sans-serif;

    div{
        padding-top:5px;
    }

    .input-fields{
        display: flex;
        padding-top:10px;
        align-items: center;
        font-family: "Inter",sans-serif; 
        margin-bottom:1rem;
    }

    .url{
        margin-left:2em;
        padding:12px;
        width:380px;
        border-radius:8px;
        font-size:14px;
       
    }

    input[type="text"]:first-child{
        padding:10px;
        padding:12px;
        width:200px;
        font-size:14px;
       
    }  
    
    input[type="text"]{
        border-radius:8px;
        border:2px solid rgb(128, 133, 237);
        letter-spacing: 1px;
    }    

    input[type="text"]:focus{
        outline: 1px solid rgb(124, 65, 255);
        border:2px solid rgb(124, 65, 255);
        
    }

`