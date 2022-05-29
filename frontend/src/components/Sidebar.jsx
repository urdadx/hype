import SpeechBubble from "../assets/speech-bubble.png";
import BellIcon from "../assets/bell.png"
import Profile from "../assets/default.png"
import { SidebarStyled } from "../styles/Sidebar.Styled";

const Sidebar = () => {
    return ( 
        <>
        <SidebarStyled>
            <div className="logo">
                <img alt="logo" src="https://img.icons8.com/color/32/000000/linktree.png"/>
            </div>
            <div className="icons_wrapper">
                <div className="icons">
                    <span>
                        <img className="icon" src={SpeechBubble} alt="user_profile" />
                    </span>

                    <span>
                        <img alt="notifications" className="icon" src={BellIcon} />
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