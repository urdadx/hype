import UserLinktree from "../components/UserLinktree";
import { checkUsername } from "../utils/checkUsername";
import { useParams } from "react-router-dom";
import { useState } from "react";
import NotFound from "./NotFound";

const MyPage = () => {

    const { username } = useParams();

    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true);

    checkUsername(username).then(data => {
        setNotFound(data)
        setLoading(false)
    })  

    return (
        <>
        {
            !loading && !notFound ? 
            <NotFound />
            :
            <UserLinktree  />
            
        }
        </>
      );
}
 
export default MyPage;