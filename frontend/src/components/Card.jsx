import { CardStyled, Flex } from "../styles/WorkSpace.Styled";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Toggle from 'react-toggle'
import { ToggleStyled } from "../styles/Toggle.Styled";


const Card = () => {


    return (
        <>
            <CardStyled>
                <div className="card_wrapper">
                    <div className="draggable">
                        <div className="icon_wrapper">
                            <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                        </div>
                    </div>
                    <div className="content">
                        <Flex>
                            <div className="title_wrapper">
                                <input className="title" type="text" autoFocus placeholder="title"/>
                              
                            </div>
                            <label>
                                <ToggleStyled>

                                <Toggle
                                    defaultChecked={true}
                                    icons={false}
                                    />
                                </ToggleStyled>
                            </label>       
                        </Flex>
                        <Flex>
                            <div className="title_wrapper" style={{marginTop:"10px"}}>
                                <input type="text" placeholder="Url"/>
                            
                            </div>

                        </Flex> 
                        <Flex>
                            <div style={{marginTop:"12px"}} className="extras">
                                <Link to="#">
                                    <Icon icon="bi:image" color="gray" width="18" height="18" inline={true} />
                                </Link>
                                <Link className="edit" to="#">
                                    <Icon icon="jam:pencil-f" color="gray" width="18" height="18" inline={true} />
                                </Link>

                            </div>
                            <div>
                                <Icon icon="bytesize:trash" color="gray" width="18" height="18" inline={true} />
                            </div>

                        </Flex>
                    </div>
                </div>
            </CardStyled>
        </>
      );
}
 
export default Card;
