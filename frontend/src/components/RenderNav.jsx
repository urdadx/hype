import { Nav } from "../styles/Render.Styled";
import { Button } from "../styles/Render.Styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RenderNav = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (  
        <>
            <Nav>
                    <div>
                        {userInfo ? <span>My Linktree: </span > : "" }
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
        </>
    );
}
 
export default RenderNav;