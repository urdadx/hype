import { Link } from "react-router-dom";
import { NotFoundStyled } from "../assets/NotFound";
import { Button } from "../styles/WorkSpace.Styled";

const NotFound = (props) => {
    return (  
        <>
        <NotFoundStyled>
            <div className="error-msg">
                <h2>{props.status}<></> <br></br> {props.title}   {props.icon}</h2>
                <br></br>
                <h2 className="login-msg">Please login again</h2>
            </div>
            {props.children}
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