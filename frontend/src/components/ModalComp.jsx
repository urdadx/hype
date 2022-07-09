import { ModalStyled } from "../styles/WorkSpace.Styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLink  } from "../actions/postActions";
import { socialBrands } from "../utils/index.utils";

const ModalComp = ({ close }) => {
    //eslint-disable-next-line
    const [isClosed, setIsClosed] = useState(false)

    const dispatch = useDispatch()

    const handleExplore = (title) => {
        dispatch(createLink(title))
        setIsClosed(true)
        setTimeout(()=> {
            window.location.reload()
        },1000)

    }                                           

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
                    {
                        socialBrands.map((brand) => {
                           return  <Link onClick={() => handleExplore(brand.title) ? close 
                                    : setIsClosed(false)} className="div" to="#">
                            <img alt={brand.title} src={brand.url} />
                            <p>{brand.title}</p>
                        </Link>
                        })
                    }    

                </div>
       
            </ModalStyled>
        </>
      );
}
 
export default ModalComp;