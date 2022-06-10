import axios from 'axios';

export const getUserInfo = async(username) => {

    return await axios.get(`http://127.0.0.1:5000/api/auth/${username}`)
    .then(response => response.data)
    .catch((error) => {
        console.log(error.message)
    })  
}