import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


// Create Link Schema
const LinkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon:{
        type:String,
        default:""
    }
});

const userSchema = new mongoose.Schema(
  {
   
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: ""
    },
    profilePicture:{
        type: String,
        default:"https://firebasestorage.googleapis.com/v0/b/user-uploads-v1.appspot.com/o/hype%2Fassets%2Fdefault.png?alt=media&token=fe934a8c-39a8-42da-9871-9c9ccc3d3a9e"
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    links:{
        type: [LinkSchema],
        default:[]
    },
    theme:{
      type:String,
      default:"https://firebasestorage.googleapis.com/v0/b/user-uploads-v1.appspot.com/o/hype%2Fthemes%2Ft3.png?alt=media&token=2921c754-9e01-47bb-bfa3-5da0f652b8ef"
    }
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User;
