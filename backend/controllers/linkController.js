import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

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

        newLink = user.links.push(newLink);
        user.save();
        newLink = await User.findById({ _id: user._id })
        res.status(401).send(newLink);
    }
    catch(err){
        console.log(err.message)
    }
    
})

const userLinks = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id);

    if(!user){
        res.status(400)
        throw new Error("User not found");
    }

    await User.findById(req.user._id)
    .sort({ date: -1 })
    .select("links")
    .exec()
    .then(links => {
        res.json({ links })
    })
    .catch(err => console.log(err));
})





export{
    createLink,
    userLinks
}