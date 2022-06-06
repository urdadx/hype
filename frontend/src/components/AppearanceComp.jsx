import { AppearanceStyled } from "../styles/AppeaStyled";
import ThemeTwo from "../assets/Themes/2.jpg"
import ThemeThree from "../assets/Themes/4.jpg"
import ThemeFive from "../assets/Themes/5.jpg"
import { Button } from "../styles/WorkSpace.Styled";


const ApprearanceComp = () => {
    return (  
        <>
            <AppearanceStyled>
            <p className="alert">* Scroll down and save any changes made *</p>
            <h3 className="title">Upload a custom theme</h3>
                <div className="theme_wrapper upload">
                    <div className="theme-info">
                    <div className="slot">
                        <label className="field-label">
                            <span className="icon">
                                <ion-icon  name="cloud-upload-outline"></ion-icon>
                            </span>
                            <input className="file-input" type="file" 
                                   hidden="hidden" accept="image/*"
                            />
                        </label>

                    <p className="select">No file choosen</p>
                    </div>

                    </div>
                   

                </div>

                <h3 className="title">Recommended</h3>
                <div className="theme_wrapper">
                    <div className="theme-info">
                        <img src={ThemeFive} alt="theme-four" />
                        <img src={ThemeTwo} alt="theme-two" />
                        <img src={ThemeThree} alt="theme-three" />
                    </div>
                   

                </div>

                <div className="button_wrapper">
                    <Button width="150px">Save changes</Button>
                </div>

            </AppearanceStyled>
        
        </>
    );
}
 
export default ApprearanceComp;