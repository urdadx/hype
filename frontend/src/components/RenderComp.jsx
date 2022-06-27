import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { PreviewStyled } from '../styles/Preview';
import { CLIENT_URL } from "../utils/index.utils";

const RenderComp = ({ open }) => {
    
const username = JSON.parse(localStorage.getItem("username"))

    return (  
        <>
            <Nav>
                <div>
                    <span>My Hyper: </span > 
                        <a className="linktree" rel="noreferrer"    
                            target="_blank" href={`${CLIENT_URL}/me/${username}`}>
                          {`${CLIENT_URL}/${username}`} 
                        </a>
                </div>
                <div>   
                    <Button onClick={open}>Share</Button>
                </div>
            </Nav>
            
            <PreviewStyled>
                <div className="phone-case">
                    <iframe title="preview"  src={`${CLIENT_URL}/me/${username}`} />
                </div>
            </PreviewStyled>
            
        </>
    );
}
 
export default RenderComp;