import ProfileComp from "./ProfileComp";
import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import Render from "../components/Render";
import { useState } from "react"
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkUsername } from "../utils/checkUsername";


const Profile  = () => {
    const { username } = useParams();

    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true);

    checkUsername(username).then(data => {
        setNotFound(data)
        setLoading(false)
    })  

    return (  
        <>
            {
                !loading && !notFound ? <NotFound />

                :     
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
            }
        
            
        </>
    );
}
 
export default Profile ;
