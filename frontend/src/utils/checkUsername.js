import axios from "axios";

export const checkUsername = async(username) => {

    return await axios.get(`http://127.0.0.1:5000/api/auth/${username}/verify`)
        .then(response => response.data)
        .catch((error) => {
            console.log(error.message)
        })        
}


