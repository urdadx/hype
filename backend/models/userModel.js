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
    profilePicture:{
        type: String,
        default:"uploads/default.png"
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
      default:""
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
