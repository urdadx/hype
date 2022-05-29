import { CanvaStyled } from "../styles/Canvas.Styled";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkSpace from "../components/WorkSpace";
import RenderNav from "../components/RenderNav";

const Canvas = () => {
    return ( 
        <>
            <CanvaStyled>
                <div className="sidebar_section">
                    <Sidebar />
                </div>
                <div className="workspace_section">
                    <Navbar />
                    <WorkSpace />
                </div>
                <div className="render_section">
                   <RenderNav />
                </div>
            </CanvaStyled>
        </>
     );
}
 
export default Canvas;