
import { LinktreeStyled } from '../styles/LinktreeStyled';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../utils/userDetails';
import { useState } from 'react';
import { useEffect } from 'react';

const UserLinktree = () => {

    const { username } = useParams();
    const [links, setLinks] = useState([])
    const [loading, setIsLoading] = useState(true)

    const [userBio, setUserBio] = useState("")
    const [userTheme, setUserTheme] = useState("")
    const [profilePicture, setUserProfilePic] = useState("")


    const theme = JSON.parse(localStorage.getItem("theme"))
    const pic = JSON.parse(localStorage.getItem("profilePicture"))


    useEffect(() => {
        getUserInfo(username).then((data) => {
            setLinks(data.links)
            setUserBio(data.bio)
            setUserTheme(data.theme)
            setUserProfilePic(data.profilePicture)
        })
        setTimeout(() => {
            setIsLoading(false)
        },1000) 
    })



    return ( 
        <>
        <LinktreeStyled>
            <section className="showcase">
                <img className="bg-pic" src={loading ? theme : userTheme} alt="bg-profile" />
                <div className="overlay">
                    <div className="profile-info">
                        <img className="profile-pic" src={loading ? pic : profilePicture} alt="profile-pic" />
                        <p>@{username}</p>
                        <p>{userBio}</p>
                        <div className="links">
                            {
                                !loading ? 
                                links.map((link) => {
                                    return <Link key={link._id} className="link" to={link.url}>{link.title}</Link> 

                                })
                                
                                :   
                                <div className='loader'>

                                    <TailSpin color="#fff" width="35" height="35" ariaLabel="loading-indicator" />
                                </div>
                                
                            }

                            {
                                !loading && links.length === 0 ?
                                <div className="loader">
                                    <p style={{color:"#fff"}}>You have no Links yet 😔</p>
                                </div>
                                :
                                ""
                            }

                            <div className='spacer'></div>
                        </div>
                    </div>
                 
                     <div className='trademark'> &copy; HyperX</div>
                </div>
            </section>
    </LinktreeStyled>
        </>
     );
}
 
export default UserLinktree;