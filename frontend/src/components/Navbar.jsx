import { NavbarStyled } from "../styles/Navbar.Styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
 

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return ( 
        <>
        <NavbarStyled>
            <div>
                <Link className="link" to={`/admin/${userInfo.username}`}>Links</Link>
            </div>
            <div>
                <Link className="link" to="/appearance">Appearance</Link>
            </div>
            <div>
                <Link className="link" to="/profile">Settings</Link>
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