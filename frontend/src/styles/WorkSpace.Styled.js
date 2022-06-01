import styled from "styled-components";


export const WorkSpaceStyled = styled.section`
    background-color: #F5F6F8;
    height:100vh;
    overflow-y: scroll;

    .no-links{
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        font-family: "Inter",sans-serif;
        font-size: 19px;
    }
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
    width:${({ width }) => width || '320px'};
    max-width: 100%;
    box-sizing: inherit;
    color: rgb(255, 255, 255);
    background:${({ background }) => background || 'rgb(124, 65, 255)'}; ;
    
    &:hover{
        background-color:rgb(128, 133, 237);
    }

`

export const ButtonGrid = styled.div`

    display: flex;
    padding:25px 25px;
    align-items: center;
    font-family: "Inter",sans-serif; 
  
`

export const CardStyled = styled.section`
    display: flex;
    padding:7px 15px;
    align-items: center;
    font-family: "Inter",sans-serif; 
    
    .card_wrapper{
        display: grid; 
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 0px;
        height: 130px;
        width:640px;
        background-color: #fff;
        margin-left: 5px;
        box-shadow:  0 2px 8px rgb(0 0 0 / 16%);
        border-radius: 4px;
        margin-top:px;
    }
    

    .draggable{
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border-right: 1px solid rgb(215, 220, 225);
        border-top-color: rgb(215, 220, 225);
        border-bottom-color: rgb(215, 220, 225);
        border-left-color: rgb(215, 220, 225);
        width: 27px;
        height: 130px;
    }


    ion-icon {
        font-size: 22px;
        margin-top:55px;
        margin-left:3.5px;
        color:grey;
    }

    .content{
        padding:25px;
        height:100%;
    }

    .title{
        font-weight: bold;
    }

    input[type="text"], input[type="url"]{
        padding: 0px;
        border: none;
        font-family: "Inter",sans-serif;
        cursor: inherit;
        display: block;
        background: none;
        box-sizing: border-box;
        color: rgb(61, 68, 75);
        font-size: 14px;
        line-height: 20px;
        letter-spacing: normal;
        width:620px;
        background-color: #fff;

    }
    input[type="text"], input[type="url"]:focus{
        outline:none;
        border:none;
        background-color: #fff;


    }

    .title_wrapper{
        display: flex;
        width:30px;

    }

    .span-title{
        text-transform: capitalize;
    }

    .extras{
        width: 100px;
        display: flex;
        align-items:center;
    }

    .edit{
        margin-left:20px;
    }
   
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:560px;

    
`


export const ModalStyled = styled.section`

    .header{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(215, 220, 225);
        padding:1px;
        align-items: center;
    }

    .header_title{
        font-weight:600;
        font-size: 20px;
        font-family: "Inter", sans-serif;
        text-align: center;
        color: #0a0b0d;
    }

    .header_title_wrapper{
        width:450px;
        margin:auto;
        padding:0px;
    }

    .close-btn{
        text-decoration: none;
        color:grey;
    }

    .socials{
        width:100%;
        display: grid; 
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding:5px 20px;
        
    }

    .socials > .div{
        width: 90%;
        height: 80px;
        padding-top: 25px;
        padding-bottom: 10px;
        background-color: rgb(245, 246, 248);
        border-radius: 24px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color:black;
        text-decoration: none;
        margin-top:20px;
    }

    img{
        width:60px;
        height:60px;
        margin:auto;
    }

    p{
        text-align: center;
        padding:2px;    
    }

    .rec{
        text-align: initial;
        padding-left:25px;
        margin-bottom: 0px;
        font-weight: 500;
    }

`
