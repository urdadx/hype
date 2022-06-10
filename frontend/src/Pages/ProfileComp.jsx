import { ProfileStyled } from "../styles/Profile.Styled";
import { Button } from "../styles/WorkSpace.Styled";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { uploadProfile } from "../actions/postActions";
import EllipsisText from "react-ellipsis-text";
import { errorNotification, successNotification } from '../utils/Notifications';
import { useParams } from "react-router-dom";

const ProfileComp  = () => {

    const [file, setFile] = useState("")
    const [isFilePicked, setIsFilePicked] = useState(false);
    const { username } = useParams()
   
    const profilePicture = JSON.parse(localStorage.getItem("profilePicture"))

    const dispatch = useDispatch()

    const changeHandler = (event) => {
		setFile(event.target.files[0]);
		setIsFilePicked(true);
	};

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
                        />
                        <textarea 
                            rows="4"
                            cols="4"
                            placeholder="Enter a bio description ( 75 character limit )">
                            
                        </textarea>
                    </div>

                </div>

                <h3 className="title update">Change Password</h3>
                <div className="profile-wrapper ">
                    <div className="input_wrapper">

                        <input className="username second" type="text"
                                placeholder="Old password"
                         />

                          <input className="username third" type="text"
                                placeholder="New password"
                         />

                    </div>

                </div>

                <div className="button_wrapper">
                    <Button width="150px">Save changes</Button>
                </div>

                <div style={{height:"150px"}}></div>
            </ProfileStyled>
           

            

        </>
     );
}
 
export default ProfileComp ;