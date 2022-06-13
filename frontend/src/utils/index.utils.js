import axios from "axios";
import { optionOne, optionThree, optionTwo } from "../assets/Themes/ThemeLinks";

export const checkUsername = async(username) => {

    return await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/${username}/verify`)
        .then(response => response.data)
        .catch((error) => {
            console.log(error.message)
        })        
}

export const withHttp = (url) => !/^https?:\/\//i.test(url) ? `https://${ url ? url : ''}` : url;

export const API_URL = "http://127.0.0.1:5000"

export const socialBrands = [
    {
        title: "YouTube",
        url:"https://img.icons8.com/color/48/000000/youtube-play.png",
    },
    {
        title: "Instagram",
        url:"https://img.icons8.com/fluency/48/000000/instagram-new.png"
    },
    {
        title: "LinkedIn",
        url:" https://img.icons8.com/fluency/48/000000/linkedin.png "
    },
    {
        title: "Tiktok",
        url:"https://img.icons8.com/fluency/48/000000/tiktok.png"
    },
    {
        title: "Twitter",
        url:"https://img.icons8.com/color/48/000000/twitter--v1.png"
    },
    {
        title: "Website",
        url:"https://img.icons8.com/fluency/48/undefined/domain.png"
    },
    {
        title: "Github",
        url:"https://img.icons8.com/fluency/48/undefined/github.png"
    },
    {
        title: "Discord",
        url:"https://img.icons8.com/fluency/48/undefined/discord-logo.png"
    },
    {
        title: "Blog",
        url:" https://img.icons8.com/ios-filled/50/undefined/medium-logo.png "
    },
    {
        title: "Patreon",
        url:" https://img.icons8.com/fluency/48/undefined/patreon.png"
    }
    
]
   

export const defaultThemes = [
    {
        url: optionOne
    },
    {
        url: optionTwo
    },
    {
        url: optionThree
    }
]


