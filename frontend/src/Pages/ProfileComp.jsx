import { ProfileStyled } from "../styles/Profile.Styled";
import { Button } from "../styles/WorkSpace.Styled";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { uploadProfile } from "../actions/postActions";
import EllipsisText from "react-ellipsis-text";
import { errorNotification, successNotification } from '../utils/Notifications';
import { useParams } from "react-router-dom";
import FormValidation from "../utils/FormValidation";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserInfo } from "../utils/userDetails";

const ProfileComp  = () => {

    const API_URL = process.env.REACT_APP_API_URL

    const [file, setFile] = useState("")
    const [isFilePicked, setIsFilePicked] = useState(false)
    const { username } = useParams()
    const [userBio, setUserBio] = useState("")
    const [userName, setName] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = useSelector((state) => state.userLogin)
    const dispatch = useDispatch()
    const { userInfo } = userLogin

    getUserInfo(username).then((data) => {
        setName(data.username)
        setUserBio(data.bio)
        setPassword(data.password)
    })

    const initialState = {
        bio: userBio,
        password: password
    };  

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    }

    const updateProfile = () => {
        axios.patch(`${API_URL}/api/auth/profile`, values, config)
        .then((res)=> {
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // localStorage.setItem("username", JSON.stringify(values.username))
    }

    const {handleSubmit, handleChange, values} = FormValidation(initialState, updateProfile);
   
    const profilePicture = JSON.parse(localStorage.getItem("profilePicture"))

    const changeHandler = (event) => {
		setFile(event.target.files[0]);
		setIsFilePicked(true);
	}

    const handleUpload = () => {
        const image = new FormData();
        image.append("file", file)

        try{
            dispatch(uploadProfile(image))
            successNotification("Profile uploaded successfully")
            setIsFilePicked(false)
            setTimeout(() => {
                window.location.reload();
            },4000) 
        }
        
        catch(error){
            errorNotification()
            setIsFilePicked(false)
        }
    }


    return ( 
        <>
        <ToastContainer />
            <ProfileStyled>
                <h3 className="title">Profile</h3>
                <div className="profile-wrapper">
                    <div className="profile-info">
                            <img src={profilePicture} alt="profile-pic" />
                            <div className="upload-btn-wrapper">
                                <button className="btn">
                                    {
                                        isFilePicked ? 
                                        <EllipsisText text={file.name} length={"25"} />
                                        : "Pick an image"
                                    }
                                </button>
                                <input onChange={changeHandler} type="file" name="myfile" />
                            </div>
                            {
                                isFilePicked ? 
                                <button  onClick={handleUpload}>
                                    Upload 🚀 
                                </button>
                                :
                                <button>
                                    Remove
                                </button>
                            }
                          
                        
                    </div>
                    <div className="input_wrapper">
                            <input className="username"  
                                type="text" placeholder={`@${username}`} 
                                value = {`@${username}`}
                                onChange = {handleChange}
                                name="username" 
                                disabled = {true}
                            />
                            <textarea 
                                rows="4"
                                cols="4"
                                name="bio"
                                value={values.bio}
                                onChange = {handleChange}
                                maxLength="75"
                                onBlur={handleSubmit}
                                placeholder="Enter a bio description ( 75 characters limit )">
                                
                            </textarea>
                    </div>

                </div>

                <h3 className="title update">Change Password</h3>
                <div className="profile-wrapper ">
                    <div className="input_wrapper">
                        
                        <input className="username second" type="password"
                               placeholder="Old password"
                         />

                          <input className="username third" type="password"
                                 placeholder="New password"
                                 value={values.password}
                                 onChange ={handleChange}
                                 name="password"
                        />

                    </div>

                </div>

                <div className="button_wrapper">
                    <Button onClick={handleSubmit} width="150px">Save changes</Button>
                </div>

                <div style={{height:"150px"}}></div>

            </ProfileStyled>
           

            

        </>
     );
}
 
export default ProfileComp ;