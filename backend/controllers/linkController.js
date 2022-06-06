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


const deleteLink = asyncHandler(async(req,res)=>{
    const username = req.params.username;
	const { _id } = req.body;
	const queryUsername = '^' + username + '$';
  
	User.findOne({ "username": { '$regex': queryUsername, $options: 'i' } })
	  .select('-password -email')
	  .then(user => {
  
		user.links.forEach((link, index) => {
		  
		if(link._id.toString() === _id.toString()) {
			user.links.splice(index, 1);
			user.save()
			  .then(user => res.json(user))
			  .catch(err => res.status(400).json('Error: ' + err));
		  }
		});
	  })
	  .catch(err => res.status(400).json('Error: ' + err))

})

const uploadTheme = asyncHandler(async (req,res)=> {
    
})






export{
    createLink,
    userLinks,
    deleteLink
}