import { ModalStyled } from "../styles/WorkSpace.Styled";
import { Link } from "react-router-dom";
import {QRCodeCanvas} from 'qrcode.react';
import useClipboard from "react-use-clipboard";
import { useSelector } from "react-redux";

const ShareComp = ({ close }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const CLIENT_URL =  process.env.REACT_APP_CLIENT_DEV_URL

    const [isCopied, setCopied] = useClipboard(`${CLIENT_URL}/me/${userInfo.username}`,
        { successDuration: 1200})
        


    return ( 
        <>
            <ModalStyled>
            <div className="header">
                    <div className="header_title_wrapper">
                        <h3 className="header_title_share">Connect to the world🚀. Share your Hyper!</h3>
                    </div>
                    <Link className="close-btn" to="#" onClick={close}>
                        <ion-icon size="large" name="close-outline"></ion-icon>
                    </Link>
                </div>
                <p className="qr-msg">
                     Here is your unique Hyper QR code that will direct people to your Hyper when scanned.
                </p>
                <div className="qr-code">
                    <QRCodeCanvas renderAs="svg" size={150} value={`${CLIENT_URL}/me/${userInfo.username}`} />
                </div>
                <div className="social-share">
                    <a rel="noreferrer" href="https://instagram.com" target="_blank" className="social-div">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <span>Share to your Instagram</span>
                    </a>
                    <a rel="noreferrer" href="https://tiktok.com" target="_blank" className="social-div">
                        <ion-icon name="logo-tiktok"></ion-icon>
                        <span>Share to your Tiktok</span>
                    </a>
                    <div className={isCopied ? "is-copied" : "copy-div"} onClick={setCopied}>
                        <ion-icon name="clipboard-outline"></ion-icon>
                        <span>{ isCopied ? "Your link was copied" : "Copy to clipboard" }</span>
                    </div>
                </div>
            </ModalStyled>
        </>
     );
}
 
export default ShareComp;