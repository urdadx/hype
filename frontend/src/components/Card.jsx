import { CardStyled, Flex } from "../styles/WorkSpace.Styled"
import { Icon } from '@iconify/react'
import { Link } from "react-router-dom"
import Toggle from 'react-toggle'
import { ToggleStyled } from "../styles/Toggle.Styled"
import { ToastContainer } from 'react-toastify'
import {  useDispatch } from "react-redux"
import { deleteLink } from '../actions/postActions'
import { errorNotification, successNotification } from '../utils/Notifications'
import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import EllipsisText from "react-ellipsis-text";
import { useParams } from "react-router-dom"
import FormValidation from "../utils/FormValidation"
import { withHttp } from "../utils/index.utils"
import { API_URL } from "../utils/index.utils"

const Card = ({ link, id }) => {

    const { username } = useParams()

    const [editTitle, setEditTitle] = useState(false);
    const [editURL, setEditURL] = useState(false);  
    
    const toggleEditTitle = () => {
        setEditTitle(!editTitle);
    }
    const toggleEditURL = () => {
        setEditURL(!editURL);
    }

    const userLink = withHttp(link.url);

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

        const initialState = {
            _id: id,
            title: link.title,
            url: userLink
        };  

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

    const editLink = () => {
        axios.patch(`${API_URL}/api/link/${username}/editlink`,values, config)
        .then(res => {
            if (editTitle === true) {
              toggleEditTitle();
            }
            if (editURL === true) {
              toggleEditURL();
            }
          })
          .catch(err => {
            console.log(err);
        })
    }

    const {handleSubmit, handleChange, values} = FormValidation(initialState, editLink);

    const dispatch = useDispatch()

    const handleDelete = () => {
        try{
            dispatch(deleteLink(id))
            successNotification("Link deleted successfully")
            setTimeout(() => {
                window.location.reload();
            },1900)  
        }
        catch(error){
            errorNotification()
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
                                {
                                    editTitle ?
                                    <form className="edit-link-input" onSubmit={handleSubmit}>
                                    
                                        <input type="text" name="title" value={values.title}
                                            onChange={handleChange} autoFocus="autofocus" onBlur={handleSubmit}
                                            placeholder={'Title'} className="edit-link-input"/>
                                    
                                    </form> :
                                    <span className="span-title" >{values.title}</span>
                                }
                                <Link onClick={toggleEditTitle} className="edit" to="#">
                                    {
                                        !editTitle ?
                                        <Icon width="14" icon="akar-icons:pencil" color="gray" />
                                        : ""
                                    }
                                </Link>                            
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
                                {
                                    editURL ?
                                    <form className="edit-link-input" onSubmit={handleSubmit}>
                                    
                                        <input type="text" name="url" value={values.url}
                                            onChange={handleChange} autoFocus="autofocus" onBlur={handleSubmit}
                                            placeholder={'URL'} className="edit-link-input"/>
                                    
                                    </form> :
                                    <a target="_blank" rel="noreferrer" href={userLink}>
                                        <EllipsisText
                                            text={values.url.length > 9 ? values.url : setEditURL(true)}
                                            length={"25"} />
                                    </a>                      
                                }
                                <Link  onClick={toggleEditURL} className="edit" to="#">
                                    {
                                        !editURL ? 
                                        <Icon  width="14" icon="akar-icons:pencil" color="gray" />
                                        : ""
                                    }
                                </Link> 
                            </div>

                        </Flex> 
                        <Flex>
                            <div style={{marginTop:"5px"}} className="extras">
                            </div>
                            <div>
                                <Link onClick={handleDelete} to="#">
                                    <Icon icon="bytesize:trash" color="gray"
                                          width="18" height="18" inline={true}
                                    />
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
