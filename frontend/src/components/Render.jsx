import { SHARE_MODAL } from "../styles/ModalStyles";
import RenderComp from "./RenderComp";
import ShareComp from "./ShareComp";
import Modal from "react-modal";
import { useState } from "react";

const Render  = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
      }
    
      const closeModal = () => {
        setIsOpen(false);
    }
  
    return ( 
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={SHARE_MODAL}
                contentLabel="Example Modal"
                >
                <ShareComp  close = {closeModal} />
            </Modal>
            <RenderComp open={openModal} />

        </>
     );
}
 
export default Render ;