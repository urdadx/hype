import styled from "styled-components";


export const AppearanceStyled = styled.section`

    padding:20px;
    height:100vh;
    overflow-y: scroll;

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

    .alert{
        text-align: center;
        margin:0px;
        color:#d9534f;
        font-weight: 500;
    }

    .theme_wrapper{
        background-color: #fff;
        width:100%;
        border-radius:8px;
        height:55%;
    }

    .theme-info{
        display: grid; 
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr ;
        padding:20px;
        align-items: center;
        gap: 15px;  
    }

    .select{
        font-family: "Inter",sans-serif;
        color:grey;
        text-align: center;
    }

    
    
    .theme-info > img{
        border-radius: 8px;
        background-position: 50%;
        background-size: cover;
        background-color: #e9eaeb;
        border: 1px solid #ebeef1;
        width:180px;
        height:290px;
        cursor: pointer;
    }


    .slot{
        width:580px;
        margin:auto;
        border: 1px dashed #666;
        border-radius: 4px;
    }

    .upload{
        height:30%;
    }

    .field-label{
        color: #666;
        font-size: 1.125rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: .5rem;
        width: 100%;
        margin: auto;
        height: 100%;
        border-radius: 4px;
        position: relative;
        z-index: 10;
    }

    .file-input{
        -webkit-font-smoothing: antialiased;
        -webkit-box-direction: normal;
        display: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ion-icon{
        font-size: 5rem;
        color:#959df4;
    }

    .button_wrapper{
        display: flex;
        justify-content: center;
        margin-top: 3.5rem;

    }






`