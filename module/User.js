import {Schema, model, models} from "mongoose"

const UsersSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type:String,
    },
    lastName:{
        type:String,
    },
    todos:[{title:String , status:String, dispersion:String}],
    createdAt: {
        type: Date,
        default:() => Date.now(),
        immutable:true
    },

})
const User = models.User || model("User",UsersSchema)

export default User