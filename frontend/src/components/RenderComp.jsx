import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PreviewStyled } from "../styles/Preview";

const RenderComp = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (  
        <>
            <Nav>
                    <div>
                        {userInfo ? <span>My Hyper: </span > : "" }
                        { userInfo ? 
                        <Link className="linktree" target="_blank" to="/https:link">
                          {`https://hype.me/${userInfo.username}`} 
                        </Link>
                        :  <Button>Login</Button>}
                    </div>
                    <div>   
                        <Button>Share</Button>
                    </div>
            </Nav>
            
            <PreviewStyled>
                <div className="phone-case">
                    <iframe title="preview"  src={`http://localhost:3000/me/${userInfo.username}`} />
                </div>
            </PreviewStyled>
            
        </>
    );
}
 
export default RenderComp;