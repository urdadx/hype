import styled from "styled-components";

export const CanvaStyled = styled.section`

    display: grid; 
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;

    .workspace_section{
        max-width:100%;
        max-width:100%;
        height: 100%;
        width:680px;
        max-width:100%;
        background-color: #F5F6F8;

    }

    .sidebar_section{
       
        height: 100%;
        width:64px;
        max-width:100%;
    }

    .render_section{
        width:calc(100vw - 680px - 64px);
        max-width:100%;
        max-width:100%;
        border-left: 1px solid #d7dce1;

    }



 


`