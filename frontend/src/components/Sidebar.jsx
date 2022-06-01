import SpeechBubble from "../assets/images/speech-bubble.png";
import BellIcon from "../assets/images/bell.png"
import Profile from "../assets/images/default.png"
import { SidebarStyled } from "../styles/Sidebar.Styled";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux"


const Sidebar = () => {

    const dispatch = useDispatch()

    const userLogout = () =>{
        dispatch(logout())
    }
    return ( 
        <>
        <SidebarStyled>
            <Link to="/">
                <div className="logo">
                    <img alt="logo" src="https://img.icons8.com/color/32/000000/linktree.png"/>
                </div>
            </Link>
            <div className="icons_wrapper">
                <div className="icons">
                    <span>
                        <img className="icon" src={SpeechBubble} alt="user_profile" />
                    </span>

                    <span>
                        <Link onClick={userLogout}  to="#">
                            <img className="icon" src="https://img.icons8.com/ios/20/undefined/exit.png"/>
                        </Link>
                        
                    </span>
                </div>
              
                    <span className="user_profile">
                        <img className="profile" src={Profile} alt="profile" />
                    </span>
                </div>
        </SidebarStyled>
        </>
     );
}
 
export default Sidebar;