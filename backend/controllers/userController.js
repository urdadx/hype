import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import uploadImageToStorage from '../utils/fileUpload.js'

const ALL_PROFILE_FOLDER = "hype/profile/"


const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      bio: user.bio,
      theme: user.theme,
      token: generateToken(user._id),
      profilePicture: user.profilePicture
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if(username  === "" || email === "" || password === ""){
    res.status(400)
    throw new Error('All fields required. Please fill the form')
  }

  const emailExists = await User.findOne({ email })
  const usernameExist = await User.findOne({ username })
  
  if(usernameExist){
    res.status(400)
    throw new Error('Username already in use')
  }

  if (emailExists) {
    res.status(400)
    throw new Error('This email address is already associated with an Hype account')
  }

  const user = await User.create({
      username,
      email,
      password,
  })


  if (user) {
    res.status(201).json({
      _id: user._id,
      username: username,
      email: user.email,
      isAdmin: user.isAdmin,
      bio: user.bio,
      theme: user.theme,
      token: generateToken(user._id),
      profilePicture: user.profilePicture,
      links: user.links
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


const getUserProfile = asyncHandler(async (req, res) => {
  await User.findOne({username : req.params.username})
  .select('-password -email')
  .then(user => {
     res.status(200).send(user);
  })
  .catch(err => res.status(400).json('Error: ' + err))
})


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email

    if (req.body.password){
      user.password = req.body.password``
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      theme: user.theme,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})



const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})


const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,

    })
  } 
  else {
    res.status(404)
    throw new Error('User not found');
  }
})


const uploadProfile = asyncHandler(async (req,res)=> {
  const file = req.file;
  const username = req.params.username;
  const queryUsername = '^' + username + '$';

  const user =  await User.findOne({ "username": { '$regex': queryUsername, $options: 'i' } })
  
  if(!user) res.status(401).status("You are not authorized");
  
  if(user){
      if (file){
        uploadImageToStorage(file,  ALL_PROFILE_FOLDER )
          .then((url) => {
            user.profilePicture = url
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



const verifyUsername = asyncHandler(async (req, res) => {
  const user = await User.findOne({username: req.params.username})
  if(!user){
     res.status(401).send(false)
  }
  else{
    res.status(200).send(true)
  }
})

  

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  uploadProfile,
  verifyUsername
}
