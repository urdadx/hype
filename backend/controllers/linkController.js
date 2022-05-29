import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import uploadImageToStorage from '../utils/fileUpload.js'

const ALL_ICONS_FOLDER = "hype/icons/"

const createLink = asyncHandler(async (req, res) => {
    const { title, url } = req.body;
    
    const user = await User.findById(req.user._id);
  
    if(!user){
        res.status(400)
        throw new Error("User not found");
    }

    try{

        let newLink  = {
            title,
            url
        }
    if(req.files){

        uploadImageToStorage(file, ALL_ICONS_FOLDER)
        .then((url) => {
        newLink = {
            ...newLink,
            icon: url,
        }
         
        })
        .catch((error) => {
          return res.status(500).send({
            error: error
          });
        });
    }

        newLink = user.links.push(newLink);
        user.save();
        newLink = await User.findById({ _id: user._id })
        res.status(401).send(newLink);
    }
    catch(err){
        console.log(err.message)
    }
    
})





export{
    createLink
}