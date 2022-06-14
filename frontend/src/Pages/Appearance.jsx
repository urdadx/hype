import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import ApprearanceComp from "../components/AppearanceComp";
import Render from "../components/Render";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { checkUsername } from "../utils/index.utils";
import NotFound from "./NotFound";
import Meta from "../components/Meta";


const Appearance  = () => {

    const { username } = useParams();

    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true);

    checkUsername(username).then(data => {
        setNotFound(data)
        setLoading(false)
    })  

    return (  
        <>
        <Meta title="Hyper | Appearance" />
        {
            !loading && !notFound ? <NotFound title="Page not found" status="404" icon="🤖"/>
            :
            
            <CanvaStyled>
                <div className="sidebar_section">
                    <Sidebar />
                </div>
                <div className="workspace_section">
                    <Navbar />
                    <ApprearanceComp />
                </div>
                <div className="render_section">
                   <Render />
                </div>
            </CanvaStyled>
        }
        </>
    );
}
 
export default Appearance ;
