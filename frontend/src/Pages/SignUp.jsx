import { AuthStyled } from '../styles/AuthStyled';
import { useState,useEffect } from "react";
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import THUNDER from "../assets/images/thunder.png"
import PARTY_IMG from "../assets/images/party.jpg"

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/admin'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const handleSubmit = (e) => {   
        e.preventDefault()
        dispatch(register(username, email, password))
        
    }  

    return ( 
        <>
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
                        <p>Sign Up</p>
                        <small>Already have an account? <a href="/login">Log In</a></small>
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

                     <p>Username</p>
                         <input
                            type="text"
                            className="input-text"
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

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
                               Sign Up
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
                            Forgot Password? <a className="recover" href="">Recover Password</a>
                        </p>

                    </div>
                </div>

                <div className="image-wrapper">
                   <img
                        className="img-illustration"
                        src={PARTY_IMG}
                    
                    />
                </div>



            </AuthStyled>
        
        </>
     );
}
 
export default SignUp;