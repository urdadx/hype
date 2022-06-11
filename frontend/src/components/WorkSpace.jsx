import { Button, WorkSpaceStyled, ButtonGrid } from "../styles/WorkSpace.Styled";
import Card from "./Card";
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import ModalComp from "./ModalComp";
import { useSelector, useDispatch } from "react-redux"
import { queryAllLinks } from "../actions/postActions";
import { TailSpin } from "react-loader-spinner";
import { customStyles } from "../styles/ModalStyles";

const WorkSpace = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch =  useDispatch()

    const postList = useSelector((state) => state.postList)
    const { loading, error, links } = postList  

    console.log(links)
   
    useEffect(() => {
        dispatch(queryAllLinks())
    },[])

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
                    <Button onClick={openModal}>Explore</Button>
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
                      !loading ? links.map((link) => {
                          return <Card link = {link} key={link._id} id= {link._id} /> 
                      })
                      :
                        <div className="no-links">
                            <TailSpin color="grey" width={50} height={50} ariaLabel="loading-indicator" />
                        </div>
                    }

                    {
                      !loading && links.length === 0 ?
                      <div className="no-links">
                         <p>You have no Links yet 😔</p>
                      </div>
                      :
                      ""
                    }

                    {
                      error &&
                      <div className="no-links">
                        <p>There was an error 😔</p>
                    </div>
                    }
                   
          

                 <div style={{height:"200px"}} ></div>


            </WorkSpaceStyled>
        
        </>
     );
}
 
export default WorkSpace;