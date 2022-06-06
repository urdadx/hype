import { CanvaStyled } from "../styles/Canvas.Styled";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';
import ApprearanceComp from "../components/AppearanceComp";
import Render from "../components/Render";

const Appearance  = () => {
    return (  
        <>
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
        </>
    );
}
 
export default Appearance ;
