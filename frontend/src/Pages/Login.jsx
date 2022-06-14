import { useState,useEffect } from "react";
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_LOGO_URL } from "../assets/images/imageUrl";
import { useNavigate } from "react-router-dom";
import { AuthStyled } from '../styles/AuthStyled';
import THUNDER from "../assets/images/thunder.png"
import { Link } from "react-router-dom"
import Meta from "../components/Meta";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
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
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }



    return (  
        <>
        <Meta title="Hyper | Login" />
        <AuthStyled>
                <div className="sign-up-wrapper">
                     <div className="logo-heading">
                         <img
                          alt="logo"
                          src={THUNDER}
                          />
                         <span>hyper</span>
                     </div>

                     <div className="login-alert">
                        <p>Log in</p>
                        <small>Need a Hyper account? <Link to="/">Sign Up</Link></small>
                     </div>

                     {
                        error && 
                            <div className="error-wrapper"> 
                                <span className="error">
                                    {error}
                                </span>
                            </div>

                    }

                    <form onSubmit={handleSubmit}>
                     <div className="input-fields">
                         <p>Email</p>
                         <input
                          type="email"
                          className="input-text"
                          placeholder="Email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                         <p>Password</p>
                        <input 
                            type="password"
                            className="input-text" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>

                     <div className="btn-wrapper">
                         {
                             !loading ? 
                         <button type="submit" className="submit-btn">
                                Log in
                         </button>
                            :
                         <button type="submit" className="submit-btn">
                             Loading...Please wait
                         </button>
                         }
                     </div>
                     </form>

                    <div className="footer">
                        <hr></hr>
                        <p className="forgot-alert">
                            Forgot Password? <Link to="#" className="recover" href="">Recover Password</Link>
                        </p>

                    </div>
                </div>

                <div className="image-wrapper">
                   <img
                        alt="login-illus"
                        className="img-illustration"
                        src={LOGIN_LOGO_URL}
                    
                    />
                </div>

        </AuthStyled>
    </>
    );
}
 
export default Login;