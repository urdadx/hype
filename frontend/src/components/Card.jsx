import { CardStyled, Flex } from "../styles/WorkSpace.Styled";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Toggle from 'react-toggle'
import { ToggleStyled } from "../styles/Toggle.Styled";
import { ToastContainer } from 'react-toastify';
import {  useDispatch } from "react-redux"
import { deleteLink } from '../actions/postActions';
import { errorNotif, successNotif } from '../utils/Notifications';

const Card = ({ link, id }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        try{
            dispatch(deleteLink(id))
            successNotif("Link deleted successfully")
            setTimeout(() => {
                window.location.reload();
            },2000)  
        }
        catch(error){
            errorNotif("An error occured. Try again")
        }
    }
 

    return (
        <>
            <ToastContainer />
            <CardStyled>
                <div  className="card_wrapper">
                    <div className="draggable">
                        <div className="icon_wrapper">
                            <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                        </div>
                    </div>
                    <div className="content">
                        <Flex>
                            <div className="title_wrapper">
                               <span className="span-title" >{link.title}</span>
                            </div>
                            <label> 
                                <ToggleStyled>

                                <Toggle
                                    defaultChecked={true}
                                    icons={false}
                                    />
                                </ToggleStyled>
                            </label>       
                        </Flex>
                        <Flex>
                            <div className="title_wrapper" style={{marginTop:"10px"}}>
                               <Link target="_blank" to={`/${link.url}`}>{link.url} </Link>
                            
                            </div>

                        </Flex> 
                        <Flex>
                            <div style={{marginTop:"13px"}} className="extras">
                                <Link to="#">
                                    <Icon icon="bi:image" color="gray" />
                                </Link>
                                <Link className="edit" to="#">
                                    <Icon icon="akar-icons:pencil" color="gray" />
                                </Link>
                            </div>
                            <div>
                                <Link onClick={handleDelete} to="#">
                                    <Icon icon="bytesize:trash" color="gray" width="18" height="18" inline={true} />
                                </Link>
                            </div>

                        </Flex>
                    </div>
                </div>
            </CardStyled>
        </>
      );
}   
 
export default Card;
