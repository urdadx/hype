import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { PreviewStyled } from '../styles/Preview';
import { API_URL } from "../utils/index.utils";

const RenderComp = ({ open }) => {

    const username = JSON.parse(localStorage.getItem("username"))


    return (  
        <>
            <Nav>
                    <div>
                        <span>My Hyper: </span > 
                        <a className="linktree" rel="noreferrer"  
                            target="_blank" href={`${API_URL}/me/${username}`}>
                          {`${API_URL}/${username}`} 
                        </a>
                    </div>
                    <div>   
                        <Button onClick={open}>Share</Button>
                    </div>
            </Nav>
            
            <PreviewStyled>
                <div className="phone-case">
                    <iframe title="preview"  src={`${API_URL}/me/${username}`} />
                </div>
            </PreviewStyled>
            
        </>
    );
}
 
export default RenderComp;