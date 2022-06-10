import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const successNotification = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose:1900,
        theme: "colored"
    });  
}

export const errorNotification = (message = "An error occured. Try again") => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose:1900,
        theme: "colored"
    });
}