import { Button, WorkSpaceStyled, ButtonGrid, ModalStyled } from "../styles/WorkSpace.Styled";
import Card from "./Card";
import Modal from 'react-modal';
import { useState } from 'react';
import { Link } from "react-router-dom";


const WorkSpace = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '45%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius:'10px',
          fontFamily: 'Inter',
          width:"70%",
          height:"75%",
          padding:"5px",
          overflowX:"hidden"
        },
      };

    const openModal = () => {
      setIsOpen(true);
    }
  
    const afterOpenModal = () => {
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
  
    return ( 
        <>
            <WorkSpaceStyled>
                 <ButtonGrid>
                    <Button>Add New Link</Button>
                    <Button onClick={openModal}>Explore</Button>
                 </ButtonGrid>

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                    <ModalStyled>
                        <div className="header">
                            <div className="header_title_wrapper">
                                <h3 className="header_title">Add to Linktree</h3>
                            </div>
                            <Link className="close-btn" to="#" onClick={closeModal}>
                                    <ion-icon size="large" name="close-outline"></ion-icon>
                            </Link>
                        </div>
                        <p className="rec">Recommeded for you</p>
                        <div className="socials">
                            <Link className="div" to="#">
                                <img alt="youtube" src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                                <p>YouTube</p>
                            </Link>
                            <Link className="div" to="#">
                                <img alt="instagram" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                            <p>Instagram</p>
                            </Link>
                            <Link className="div" to="#">
                                <img alt="linkedin" src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
                                <p>LinkedIn</p>
                            </Link>
                            <Link className="div" to="#">
                                <img alt="spotify" src="https://img.icons8.com/fluency/48/000000/tiktok.png" />
                                <p>Tiktok</p>
                            </Link>
                            <Link className="div" to="#">
                                <img alt="twitter" src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
                                <p>Twitter</p>
                            </Link>

                        </div>
       
                    </ModalStyled>
                    </Modal>

                 <Card />
                 <Card />   

                 
                 <div style={{height:"200px"}} ></div>

            </WorkSpaceStyled>
        
        </>
     );
}
 
export default WorkSpace;