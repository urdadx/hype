import styled from "styled-components";


export const WorkSpaceStyled = styled.section`
    background-color: #F5F6F8;
    height:100%;
    overflow-y: scroll;
`
export const Button = styled.button`
  
    padding: 0px;
    margin-left: 15px;
    border: none;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    display: block;
    border-radius: 12px;
    height: 48px;
    font-weight: 600;
    font-size: 16px;
    width:240px;
    max-width: 100%;
    box-sizing: inherit;
    color: rgb(255, 255, 255);
    background-color: rgb(124, 65, 255);
    
    &:hover{
        background-color:rgb(128, 133, 237);
    }

`

export const ButtonGrid = styled.div`

    display: flex;
    padding:45px 25px;
    align-items: center;
    font-family: "Inter",sans-serif; 
  
`

export const Card = styled.div`
    flex: 1 1 0%;
    padding: 16px;
    height: 100%;
    position: relative;

`