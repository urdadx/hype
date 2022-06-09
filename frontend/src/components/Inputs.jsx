import { InputStyled } from "../styles/Navbar.Styled";
import { createLink  } from "../actions/postActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { errorNotif, successNotif } from "../utils/Notifications";

const Inputs = () => {

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        if(url === "" || title === ""){
            errorNotif("All fields required")
        }
        else{
            try{    
                dispatch(createLink(title, url))           
                setTitle("")
                setUrl("")
                successNotif("Link added successfully")
                setTimeout(() => {
                    window.location.reload();
                },2000)  
              

            }
            catch(error){
                 errorNotif("An error occured. Try again") 
            }
        }

    }  

    return (
        <>
        <InputStyled>
        
            <form id="my-form" onSubmit={handleSubmit}>

            <div className="input-fields">
            <input
                    placeholder="Title" 
                    type="text" 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    autoFocus
                />
            <input
                    placeholder="URL"
                    className="url" type="text"
                    value = {url}
                    onChange = {(e) => setUrl(e.target.value)}
                />
            </div>
            </form>

    </InputStyled>
        </>
      );
}
 
export default Inputs;