import ProfileComp from "./ProfileComp";
import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import Render from "../components/Render";
import { useState } from "react"
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkUsername } from "../utils/index.utils";
import Meta from "../components/Meta";


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
            <Meta title="Hyper | Profile" />
            {
                !loading && !notFound ? <NotFound title="Page not found" status="404" icon="🤖"/>
 
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
