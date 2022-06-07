import { Link } from "react-router-dom";
import { NotFoundStyled } from "../assets/NotFound";
import { Button } from "../styles/WorkSpace.Styled";

const NotFound = () => {
    return (  
        <>
        <NotFoundStyled>
            <h2>404 <br></br> Page not found!   <br></br>    🤖</h2>
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