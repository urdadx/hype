import SpeechBubble from "../assets/images/speech-bubble.png";
import { SidebarStyled } from "../styles/Sidebar.Styled";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux"
import { ALERT_MODAL } from "../styles/ModalStyles";
import AlertComp from "./AlertComp";
import { useState } from "react";
import Modal from "react-modal"
import { ToastContainer } from "react-toastify";

const Sidebar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const profilePicture = JSON.parse(localStorage.getItem("profilePicture"))

    const dispatch = useDispatch()

    const userLogout = () =>{
        dispatch(logout())
    }

    return ( 
        <>
            <ToastContainer />
            
            <Modal  
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={ALERT_MODAL}
                contentLabel="Example Modal"
                >
                <AlertComp  close={closeModal} />
            </Modal>

        <SidebarStyled>
            <Link to="#">
                <div className="logo">
                    <img alt="logo" src="https://img.icons8.com/color/32/000000/linktree.png"/>
                </div>
            </Link>
            <div className="icons_wrapper">
                <div className="icons">
                    <span>
                        <Link onClick={openModal} to="#">
                            <img className="icon" src={SpeechBubble} alt="user_profile" />
                        </Link>
                    </span>

                    <span>
                        <Link onClick={userLogout}  to="#">
                            <img alt="logout" className="icon" src="https://img.icons8.com/ios/20/undefined/exit.png"/>
                        </Link>
                        
                    </span>
                </div>
              
                    <span className="user_profile">
                        <img className="profile" src={profilePicture} alt="profile" />
                    </span>
                </div>
        </SidebarStyled>
        </>
     );
}
 
export default Sidebar;