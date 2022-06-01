import { Dropdown, NavbarStyled } from "../styles/Navbar.Styled";
import { Link } from "react-router-dom";
import { createLink  } from "../actions/postActions";
import { useSelector,useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { useState } from "react";

const Navbar = () => {

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [isPosted, setIsPosted] = useState(isPosting)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        if(url === "" || title === ""){
            setIsPosting(false)

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
                console.log(title, url)
                setIsPosting(true)
                if(setIsPosting){
                    
                    setIsPosted(false)
                }
                setIsPosted(true)
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
        <NavbarStyled>
            <div>
                <Link className="link" to="/links">Links</Link>
            </div>
            <div>
                <Link className="link" to="/appearance">Appearance</Link>
            </div>
            <div>
                <Link className="link" to="/settings">Settings</Link>
            </div>
            <div>
                 <Link className="link" to="/analytics">Analytics</Link>
            </div>
            <div >
                <Link className="link" to="/upgrade">Upgrade</Link>
            </div>
         
        </NavbarStyled>

        <Dropdown>
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

        </Dropdown>
       

        </>
     );
}
 
export default Navbar;