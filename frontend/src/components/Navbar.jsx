import { NavbarStyled } from "../styles/Navbar.Styled";
import { Link } from "react-router-dom";
import { getUserInfo } from "../utils/userDetails"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

const Navbar = () => {

    const { username } = useParams();
    const [userName, setName] = useState("")

    
    useEffect(() => {
        getUserInfo(username).then((data) => {
            setName(data.username)
           
        }) 
    })

    return ( 
        <>
        <NavbarStyled>
            <div>
                <Link className="link" to={`/admin/${userName}`}>Links</Link>
            </div>
            <div>
                <Link className="link" to={`/appearance/${userName}`}>Appearance</Link>
            </div>
            <div>
                <Link className="link" to={`/profile/${userName}`}>Settings</Link>
            </div>
            <div>
                 <Link className="link" to="/analytics">Analytics</Link>
            </div>
            <div >
                <Link className="link" to="/upgrade">Upgrade</Link>
            </div>
         
        </NavbarStyled>


       

        </>
     );
}
 
export default Navbar;