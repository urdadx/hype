import ProfileComp from "./ProfileComp";
import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import Render from "../components/Render";

const Profile  = () => {
    return (  
        <>
            <CanvaStyled>
                <div className="sidebar_section">
                    <Sidebar />
                </div>
                <div className="workspace_section">
                    <Navbar />
                    <ProfileComp />
                </div>
                <div className="render_section">
                   <Render />
                </div>
            </CanvaStyled>
        </>
    );
}
 
export default Profile ;
