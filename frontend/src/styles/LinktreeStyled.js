import styled from "styled-components";

export const LinktreeStyled = styled.section`


.showcase {

  width: 100vw;
  height:100vh;
  position: relative;
  color: white;
  text-align: center;
}

.bg-pic {
  width: 100vw;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index:99
}

.showcase .overlay {
    width: 100vw;
    height:100%;
    background-size: cover;
    background-repeat: repeat;
    /* background-color: rgba(0, 35, 82, 0.7); */
    position: absolute;
    top: 0;
    left: 0;
    z-index:999;
    overflow: auto  ;
}


.showcase p {
  margin-top: 8px;
  font-size: 1.2em;
  text-align: center;
}

.profile-info{
    display: block;
    justify-content: center;
    margin-top:1rem;  
    width:100%;
    height:100%;

}

.profile-pic{
    width:100px;
    height:100px;
    border-radius: 1000px;
}

.links{
    display: flex;
    flex-direction: column;
    width:65%;
    margin:auto;   
}

 .link{
    z-index: 0;
    text-decoration: none;
    margin-bottom: 16px;
    padding:17px;
    border: 2px solid rgb(243, 225, 247);
    background-color: #fafafa;
    color: rgb(4, 4, 4);
    box-shadow: rgb(91 26 97 / 24%) 0px 2px 8px 0px;
    transform: scale(1);
    transition: transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
    border-radius: 30px;
    font-weight:200;
    font-size:18px;
    font-family: "Inter",sans-serif;
}


.trademark{
    margin-top:2rem;
    font-size:25px;
    font-weight: bold;
    margin-bottom:2rem;
}

.spacer{
    margin-top:10rem;
}

.loader{
    display: flex;
    justify-content: center;
}

.loader-one{
    display: flex;
    justify-content: center;
}

.link:hover{
    background-color: rgb(243, 225, 247);
}

@media only screen and (max-width: 180px) {
    .profile-info{
        margin-top:1rem;
    }
    .profile-pic{
        width:50px;
        height:50px;
    }
     .showcase p{
        font-size:10px;
    }

    .links{
        width:90%;
    }
    .link{
        margin-bottom: 12px;
        padding:8px;
        font-size: 10px;
    }

    .trademark{
        margin-top: 0.5rem;
        font-size:10px;
    }

    .showcase .overlay::-webkit-scrollbar {
        background:transparent;
        width:1px;
    }

    .spacer{
        margin-top:2rem;
    }

}



`