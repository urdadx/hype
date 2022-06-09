import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const successNotif = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose:1900,
        theme: "colored"
    });  
}

export const errorNotif = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose:1900,
        theme: "colored"
    });
}