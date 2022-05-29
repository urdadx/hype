import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { Link } from "react-router-dom";

const RenderNav = () => {
    return (  
        <>
            <Nav>
                    <div>
                        <span>My Linktree: </span >
                        <Link className="linktree" target="_blank" to="/https:link">
                            https://linktr.ee/_shinobi
                        </Link>
                    </div>
                    <div>   
                        <Button>Share</Button>
                    </div>
                </Nav>
        </>
    );
}
 
export default RenderNav;