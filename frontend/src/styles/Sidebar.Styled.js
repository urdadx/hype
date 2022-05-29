import styled from "styled-components";


export const SidebarStyled = styled.div`

    height: 100%;
    max-height: 100vh;
    position: fixed;
    display: inline-block;
    width: 64px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10001;
    background-color: #fff;
    border-bottom: 0;
    border-right: 1px solid #d7dce1;

    .logo{
        cursor: pointer;
        display: block;
        width: 40px;
        margin-top:10px;
        height: 40px;
        margin-left:15px;
        background-color: transparent;
        border-radius: 100%;
    }

    span{
        width: 64px;
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .profile{
        width:40px;
        height:40px;
        border-radius: 1000px;
        margin-top:4rem;
    }

    .user_profile{
        margin-left:15px;
    }

    .icons{
        margin-top:25rem;
       
    }

    .icon{
        width:25px;
        height:25px;
        margin-left:20px;

    }

   
    



`