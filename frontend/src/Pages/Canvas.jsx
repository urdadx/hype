import { CanvaStyled } from "../styles/Canvas.Styled";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkSpace from "../components/WorkSpace";
import Inputs from "../components/Inputs";
import Render from "../components/Render";
import { checkUsername } from "../utils/index.utils";
import { useParams } from "react-router-dom";
import { useState } from "react";
import NotFound from "./NotFound";

const Canvas = () => {

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
                    <Inputs />
                    <WorkSpace />
                </div>
                <div className="render_section">
                    <Render />
                </div>
            </CanvaStyled>
        }
        </>
     );
}
 
export default Canvas;