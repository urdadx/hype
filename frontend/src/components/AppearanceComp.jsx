import { AppearanceStyled } from "../styles/AppeaStyled";
import ThemeTwo from "../assets/Themes/t1.webp"
import ThemeOne from "../assets/Themes/t2.webp"
import ThemeThree from "../assets/Themes/t3.png"
import { Button } from "../styles/WorkSpace.Styled";
import { uploadTheme } from "../actions/postActions";
import { useState } from "react"
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Icon } from '@iconify/react';
import { chooseTheme } from "../actions/postActions";
import { optionOne, optionThree, optionTwo } from "../assets/Themes/ThemeLinks";

const ApprearanceComp = () => {

    const dispatch = useDispatch()

    const [file, setFile] = useState("")
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isApplied, setIsApplied] = useState(false);

    const changeHandler = (event) => {
		setFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleUpload = () => {
        const image = new FormData();
        image.append("file", file)

        try{
            dispatch(uploadTheme(image))
            toast.success("Theme uploaded successfully", {
                position: toast.POSITION.TOP_RIGHT, 
                autoClose:1900,
                theme: "colored"
            });  
            setIsFilePicked(false)
        }
        
        catch(error){
            toast.error("An error occured. Try again", {
                position: toast.POSITION.TOP_RIGHT, 
                autoClose:1900,
                theme: "colored"
            });  
            setIsFilePicked(false)
        }
    }

    const handleChoosing = (option) => {
        try{
            dispatch(chooseTheme(option))
            toast.success("Theme applied successfully", {
                position: toast.POSITION.TOP_RIGHT, 
                autoClose:1900,
                theme: "colored"
            });  
            setIsApplied(true)
            setTimeout(() => {
                window.location.reload();
            },2000)  
        }
        catch(error){
            toast.error("An error occured. Try again", {
                position: toast.POSITION.TOP_RIGHT, 
                autoClose:1900,
                theme: "colored"
            });  
            setIsApplied(false)
            console.log(error.message)
        }
    }


    return (  
        <>
            <ToastContainer />
            <AppearanceStyled>

            <h3 className="title">Upload a custom theme</h3>
                <div className="theme_wrapper upload">
                    <div className="theme-info">
                    <div className="slot">
                        <div className="border">
                        <label className="field-label">
                            <span className="icon">
                                <Icon icon="bi:cloud-upload" color="#8e93f2" width="70" height="70" />
                            </span>
                            <input className="file-input" type="file" 
                                   hidden="hidden" accept="image/*"
                                   name="file" onChange={changeHandler}
                            />
                        </label>

                    <p className="select">
                        {
                           isFilePicked ? file.name  : "No file choosen"
                        }
                    </p>
                    </div>
                   
                    </div>
                    </div>
                
                </div>

                <div className="button_wrapper">
                    {
                        isFilePicked ? 
                        <Button onClick={handleUpload} width="140px">Upload theme</Button>
                        :
                        <Button disabled={isFilePicked}  width="140px">Upload theme</Button>
                    }
                </div>

                <h3 className="title">Recommended</h3>
                <div className="theme_wrapper">
                    <div className="theme-info">
                        <div onClick={() => handleChoosing(optionOne)} className="div-image">                            
                            <img className="image" src={ThemeOne} alt="theme-four" />
                            <div className="overlay">
                                <div className="free-wrapper">
                                    <h5>Choose</h5> 
                                    <ion-icon name="color-wand-outline"></ion-icon>
                                </div>
                                <h3 className="apply">
                                    {
                                        isApplied ? "Applied🎉" : "Click to apply!🎉"
                                    }
                                </h3>
                            </div>
                        </div>
                        <div onClick={() => handleChoosing(optionTwo)} className="div-image">
                            <img className="image"  src={ThemeTwo} alt="theme-two" />
                            <div className="overlay">
                                <div className="free-wrapper">
                                    <h5>Choose </h5>
                                    <ion-icon name="color-wand-outline"></ion-icon>
                                </div>
                                <h3 className="apply">
                                {
                                      isApplied ? "Applied🎉" : "Click to apply!🎉"
                                }   
                                </h3>
                            </div>
                        </div>
                        <div onClick={() => handleChoosing(optionThree)}  className="div-image">
                            <img className="image"  src={ThemeThree} alt="theme-three" />
                            <div className="overlay">
                                <div className="free-wrapper">
                                    <h5>Choose</h5>
                                    <ion-icon name="color-wand-outline"></ion-icon>
                                </div>
                                <h3 className="apply">
                                    {
                                        isApplied ? "Applied🎉" : "Click to apply!🎉"
                                    }
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"200px"}}></div>
            

            </AppearanceStyled>
        
        </>
    );
}
 
export default ApprearanceComp;