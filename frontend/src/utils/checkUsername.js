import axios from "axios";

export const checkUsername = async(username) => {

    return await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/${username}/verify`)
        .then(response => response.data)
        .catch((error) => {
            console.log(error.message)
        })        
}


