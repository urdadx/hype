import { AppearanceStyled } from "../styles/AppeaStyled";
import ThemeTwo from "../assets/Themes/2.jpg"
import ThemeThree from "../assets/Themes/4.jpg"
import ThemeFive from "../assets/Themes/5.jpg"
import { Button } from "../styles/WorkSpace.Styled";
import { uploadTheme } from "../actions/postActions";
import { useState } from "react"
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const ApprearanceComp = () => {

    const dispatch = useDispatch()

    const [file, setFile] = useState("")
    const [isFilePicked, setIsFilePicked] = useState(false);

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
                                <ion-icon  name="cloud-upload-outline"></ion-icon>
                            </span>
                            <input className="file-input" type="file" 
                                   hidden="hidden" accept="image/*"
                                   name="file" onChange={changeHandler}
                            />
                        </label>

                    <p className="select">
                        {
                            isFilePicked ? file.name 
                            :
                            "No file choosen"
                        }
                    </p>
                    </div>
                   
                    </div>
                    </div>
                
                </div>

                <div className="button_wrapper">
                    <Button onClick={handleUpload} width="140px">Upload theme</Button>
                </div>



                <h3 className="title">Recommended</h3>
                <div className="theme_wrapper">
                    <div className="theme-info">
                        <img src={ThemeFive} alt="theme-four" />
                        <img src={ThemeTwo} alt="theme-two" />
                        <img src={ThemeThree} alt="theme-three" />
                    </div>
                </div>

            

            </AppearanceStyled>
        
        </>
    );
}
 
export default ApprearanceComp;