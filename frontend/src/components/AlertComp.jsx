import { Button, ModalStyled } from "../styles/WorkSpace.Styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { successNotification } from "../utils/Notifications";

const AlertComp = ({ close }) => {

    //eslint-disable-next-line
    const [isClosed, setIsClosed] = useState(false)

    const handleSubmit = () => {
        successNotification("Report sent!")
        setIsClosed(true)
    }

    return (  
        <>
        
        <ModalStyled>
            <div className="header">
                <div className="header_title_wrapper">
                    <h2 className="header_title">Report a Bug 🐞</h2>
                </div>
                <Link className="close-btn" to="#" onClick={close}>
                    <ion-icon size="large" name="close-outline"></ion-icon>
                </Link>
            </div>
            <div className="form-container">
                <p>Title</p>
                <input placeholder="Be specific eg: Error with my eyes" type="text"></input>
                <p>Description</p>
                <textarea 
                        rows="4"
                        cols="4"
                        name="bug-desc"
                        minLength="45"
                        placeholder="Please describe the problem in detail">    
                </textarea>
                <div className="btn-div">
                    <Button onClick={handleSubmit ? close : setIsClosed(false)} width="150px">
                        Send Report
                    </Button>
                </div>
            </div>
        </ModalStyled>
        </>
    );
}
 
export default AlertComp;