import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import uploadImageToStorage from '../utils/fileUpload.js';

const ALL_ICONS_FOLDER = "hype/icons/"
const ALL_THEMES_FOLDER = "hype/themes/"


const createLink = asyncHandler(async (req, res) => {
    const { title, url } = req.body;
    
    const user = await User.findById(req.user._id);
  
    if(!user){
        res.status(400)
        throw new Error("User not found");
    }

    try{

        let newLink = {
            title,
            url
        }

        newLink = user.links.push(newLink);
        user.save();
        newLink = await User.findById({ _id: user._id })
        res.status(200).send(newLink);
    }
    catch(error){
        res.status(400).send(error)
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
    .catch(err => res.status(400).send(err));
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
    const file = req.file;
    const username = req.params.username;
    const queryUsername = '^' + username + '$';

    const user =  await User.findOne({ "username": { '$regex': queryUsername, $options: 'i' } })
    
    if(!user) res.status(401).status("You are not authorized");
    
    if(user){
        if (file){
          uploadImageToStorage(file, ALL_THEMES_FOLDER )
            .then((url) => {
              user.theme = url
              const updatedUser = user.save();
      
              return res.status(200).send({
                image: url      
              });
            })
            .catch((error) => {
              return res.status(500).send({
                error: error,
              });
            });
        } 
        else {
          return res.status(422).send({
            error: "File is required",
          });
        }
    }
})


const chooseTheme = asyncHandler(async(req,res) => {
  
  const username = req.params.username;
  const queryUsername = '^' + username + '$';
  const {option} = req.body;

  await User.findOne({ "username": { '$regex': queryUsername, $options: 'i' } })
  .select('-password -email')
  .then(user => {
      user.theme = option
      user.save()
      .then(user => res.json(user.theme))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err))

}
)


const editLink = asyncHandler(async(req,res) => {

  const username = req.params.username;
  const { _id } = req.body;
  const queryUsername = '^' + username + '$';
  
  User.findOne({ "username": { '$regex': queryUsername, $options: 'i' } })
    .select('-password -email')
    .then(user => {
  
      user.links.forEach((link, index) => {
        
        if (link._id.toString() === _id.toString()) {
          const url = req.body.url;
          const title = req.body.title;
  
          user.links[index] = {"_id": _id, "url": url, "title": title}
          user.save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      });
    })
    .catch(err => res.status(400).json('Error: ' + err))
})








export{
    createLink,
    userLinks,
    deleteLink,
    uploadTheme,
    chooseTheme,
    editLink
}