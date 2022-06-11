import { Link } from "react-router-dom";
import { NotFoundStyled } from "../assets/NotFound";
import { Button } from "../styles/WorkSpace.Styled";

const NotFound = () => {
    return (  
        <>
        <NotFoundStyled>
            <div className="error-msg">
                <h2>404 <br></br> Page not found!   <br></br>    🤖</h2>
                <br></br>

                <h2 className="login-msg">Please login again</h2>

            </div>
            <div className="wrapper">
            <Link className="home" to="/login">
                <Button className="btn">Go Home</Button>
            </Link>
            </div>
        </NotFoundStyled>
        </>
    );
}
 
export default NotFound;