import styled from "styled-components"

export const Nav = styled.section`
    display: flex;
    -webkit-box-align: stretch;
    -webkit-box-pack: start;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding-top: 0px;
    padding-left:35px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(218, 222, 224);
    transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
    font-family: "Inter", sans-serif;

    div{
        padding-top:5px;
      
    }

    span{
        font-weight:bold;
        font-size:14px;
    }

    .linktree{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color:#0a0b0d;
        text-decoration: underline;
    }


`

export const Button = styled.button`
    flex: 0;
    white-space: nowrap;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #d7dce1;
    padding: 6px 12px;
    font-size: 14px;
    padding:10  px;
    color: #686d73;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        background-color: #d7dce1;
    }

`