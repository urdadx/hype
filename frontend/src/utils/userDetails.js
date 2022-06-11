import axios from 'axios';

export const getUserInfo = async(username) => {

    return await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/${username}`)
    .then(response => response.data)
    .catch((error) => {
        console.log(error.message)
    })  
}