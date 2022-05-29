import { Dropdown, NavbarStyled } from "../styles/Navbar.Styled";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <div>Analytics</div>
            <div>
                <ion-icon name="caret-down-outline"></ion-icon>
            </div>
        </Dropdown>
       

        </>
     );
}
 
export default Navbar;