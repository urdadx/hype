import { Button, WorkSpaceStyled, ButtonGrid } from "../styles/WorkSpace.Styled";
import Card from "./Card";
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import ModalComp from "./ModalComp";
import { useSelector, useDispatch } from "react-redux"
import { queryAllLinks } from "../actions/postActions";
import { Link } from "react-router-dom";

const WorkSpace = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const postList = useSelector((state) => state.postList)
    const { loading, error, links } = postList  
    const dispatch = useDispatch()

    console.log(links)

    useEffect(()=> {
        dispatch(queryAllLinks())
    },[])


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
  
    const closeModal = () => {
      setIsOpen(false);
    }


 
  
    return ( 
        <>
            <WorkSpaceStyled>
                 <ButtonGrid>
                    <Button form = "my-form">Add New Link</Button>
                    <Button onClick={openModal}>🧭 Explore</Button>
                 </ButtonGrid>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                         <ModalComp  close = {closeModal} />
                    </Modal>
                    {
                      !loading && links.map((link) => {
                          return <Card link = {link} key={link._id} /> 
                        
                      })
                    }

                    {
                      links.length === 0 &&
                      <div className="no-links">
                         <p>You have no Links yet 😔</p>
                      </div>
                    }
                   
          

                 <div style={{height:"200px"}} ></div>


            </WorkSpaceStyled>
        
        </>
     );
}
 
export default WorkSpace;