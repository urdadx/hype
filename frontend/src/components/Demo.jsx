import { ModalStyled } from "../styles/WorkSpace.Styled";
import { Link } from "react-router-dom";
import { Button } from "../styles/WorkSpace.Styled";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import { useEffect } from "react";


const Demo = ({ close }) => {

    const [isClosed, setIsClosed] = useState(false)
  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
  
    const redirect = window.location.search ? window.location.search.split('=')[1] : '/admin'
  
    useEffect(() => {
      if (userInfo) {
        navigate(`${redirect}/${userInfo.username}`)
      }
    }, [navigate, userInfo, redirect])
  

    const handleDemoLogin = () => {
        setIsClosed(true)
        dispatch(login("demo@hired.com", "demo123"))
    }

    return (  
        <>
            <ModalStyled>
                <div className="header">
                    <div className="header_title_wrapper">
                        <h3 className="header_title">Recruiter Login 🕵️‍♂️ *Simply click to login*</h3>
                    </div>
                    <Link className="close-btn" to="#" onClick={close}>
                        <ion-icon size="large" name="close-outline"></ion-icon>
                    </Link>
                    </div>
                        <div className="form-container">
                        <p>Username</p>
                        <input placeholder="Username" value="demo" type="text"></input>
                        <p>Email</p>
                        <input placeholder="Email" value="demo@hired.com" type="text"></input>
                        <p>Password</p>
                        <input placeholder="Password" value="demo123" type="text"></input>

                    <div className="btn-div">
                        <Button onClick={handleDemoLogin} width="180px">
                            {
                                loading ? "Loading...Please wait" : "Demo Login"
                            }
                        </Button>
                    </div>
                </div>

            </ModalStyled>
        
        </>
    );
}
 
export default Demo;