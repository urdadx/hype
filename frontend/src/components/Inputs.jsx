import { InputStyled } from "../styles/Navbar.Styled";
import { createLink  } from "../actions/postActions";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { useState } from "react";

const Inputs = () => {

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        if(url === "" || title === ""){
            // Show user notification
            toast.error("All fields required", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:2000,
                theme: "colored"
            });  
        }
        else{
            try{    
                dispatch(createLink(title, url))           
                setTitle("")
                setUrl("")
                // Show user notification   
                toast.success("Link added successfully", {
                    position: toast.POSITION.TOP_RIGHT, 
                    autoClose:2000,
                    theme: "colored"
                });  
                setTimeout(() => {
                    window.location.reload();
                },2000)  
              

            }
            catch(error){
                  // Show user notification   
                  toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT, 
                    autoClose:2000,
                    theme: "colored"
                });  
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