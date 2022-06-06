import Profile from "../assets/images/default.png"
import { ProfileStyled } from "../styles/Profile.Styled";
import { Button } from "../styles/WorkSpace.Styled";

const ProfileComp  = () => {
    return ( 
        <>
            <ProfileStyled>

                <p className="alert">* Scroll down and save any changes made *</p>
                <h3 className="title">Profile</h3>
                <div className="profile-wrapper">
                    <div className="profile-info">
                            <img src={Profile} alt="profile-pic" />
                            <button>Pick an image</button>
                            <button>Remove</button>
                    </div>
                    <div className="input_wrapper">
                        <input className="username" type="text" placeholder="Profile Title" />
                        <textarea 
                            rows="4"
                            cols="4"
                            placeholder="Enter a bio description to appear on your hyper">
                            
                        </textarea>
                    </div>

                </div>

                <h3 className="title update">Update Profile</h3>
                <div className="profile-wrapper ">
                    <div className="input_wrapper">
                        <input className="username email" type="text"
                                placeholder="Change current email"
                         />

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