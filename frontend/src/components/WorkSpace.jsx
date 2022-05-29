import { Button, WorkSpaceStyled, ButtonGrid } from "../styles/WorkSpace.Styled";


const WorkSpace = () => {
    return ( 
        <>
            <WorkSpaceStyled>
                 <ButtonGrid>
                    <Button>Add New Link</Button>
                    <Button>Explore</Button>
                 </ButtonGrid>
            </WorkSpaceStyled>
        
        </>
     );
}
 
export default WorkSpace;