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
        grid-template-rows: 1fr ;
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

    
    
   .theme-info > div > img{
        border-radius: 8px;
        background-position: 50%;
        background-size: cover;
        border: 1px solid #ebeef1;
        width:180px;
        height:290px;
        cursor: pointer;
        
    } 


    .border{
        width:580px;
        margin:auto;
        border: 1px dashed #666;
        border-radius: 4px;
    }

    .upload{
        height:29%;
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
        margin-top: 1.5rem;

    }

    .div-image {
        position: relative;
        max-width: 300px;
        cursor: pointer;
        padding:1px;
        border: 2px solid #d9dbe0;
        border-radius: 8px;
    }

    .image {
        display: block;
        width: 100%;
        height: auto;

    }

    .overlay {
        position: absolute; 
        top:0;
        bottom: 0; 
        /* Black see-through */
        color: #f1f1f1; 
        width: 140px;
        border-radius: 8px;
        transition: .5s ease;
        color: white;
        font-size: 20px;
        padding: 20px;
        text-align: center;
    }

    .apply{
        font-family: "Inter",sans-serif;
        font-size:18px;
        margin-top:70%;
        font-weight: 600;
        opacity: 0;

    }

    h5{
        opacity:2;
        font-family: "Inter",sans-serif;
        font-size:14px;
        text-align: initial;
        margin:0;
        font-weight: bolder;
        color:#3a41bc;
        font-weight:bold;
        
    }

    .free-wrapper{
        display: flex;
        margin:0px;
        align-items: center;
        padding:3px;
        background-color: white;
        align-items: initial;
        width:fit-content;
        border-radius: 4px;
    }

    ion-icon{
        font-size:17px;
        color:#3a41bc;
        padding-left:2px;
    }

    .div-image:hover .overlay{
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.5);
    }

    .div-image:hover .apply {
        opacity: 1;
    }

    .free-wrapper:hover{
        color:black;
    }







`