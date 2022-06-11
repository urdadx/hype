import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import ApprearanceComp from "../components/AppearanceComp";
import Render from "../components/Render";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { checkUsername } from "../utils/index.utils";
import NotFound from "./NotFound";


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
        {
            !loading && !notFound ? <NotFound />
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
