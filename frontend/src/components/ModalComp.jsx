import { ModalStyled } from "../styles/WorkSpace.Styled";
import { Link } from "react-router-dom";

const ModalComp = ({close, addField}) => {
    return (
        <>  
            <ModalStyled>
                <div className="header">
                    <div className="header_title_wrapper">
                        <h3 className="header_title">Add to hyper⚡</h3>
                    </div>
                    <Link className="close-btn" to="#" onClick={close}>
                        <ion-icon size="large" name="close-outline"></ion-icon>
                    </Link>
                </div>
                <p className="rec">Recommended for you</p>
                <div className="socials">
                    <Link onClick={addField} className="div" to="#">
                        <img alt="youtube" src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                        <p>YouTube</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="instagram" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                          <p>Instagram</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="linkedin" src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
                        <p>LinkedIn</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="spotify" src="https://img.icons8.com/fluency/48/000000/tiktok.png" />
                        <p>Tiktok</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="twitter" src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
                        <p>Twitter</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="twitter" src="https://img.icons8.com/fluency/48/undefined/domain.png" />
                        <p>Website</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="twitter" src="https://img.icons8.com/fluency/48/undefined/github.png" />
                        <p>Github</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="twitter" src="https://img.icons8.com/fluency/48/undefined/discord-logo.png" />
                        <p>Discord</p>
                    </Link>
                    
                    <Link className="div" to="#">
                        <img alt="twitter" src="https://img.icons8.com/ios-filled/50/undefined/medium-logo.png  " />
                        <p>Blog</p>
                    </Link>
                    <Link className="div" to="#">
                        <img alt="twitter" src=" https://img.icons8.com/fluency/48/undefined/patreon.png" />
                        <p>Patreon</p>
                    </Link>
                   
                

                </div>

       
                    </ModalStyled>
        </>
      );
}
 
export default ModalComp;