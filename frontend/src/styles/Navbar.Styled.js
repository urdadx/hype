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

export const Dropdown = styled.section`
    display: flex;
    -webkit-box-align: stretch;
    -webkit-box-pack: start;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0px 35px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(218, 222, 224);
    transition: color 0.2s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
    font-family: "Inter", sans-serif;

    div{
        padding-top:5px;
    }


`