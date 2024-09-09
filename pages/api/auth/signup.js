import connectDB from "@/utils/connectDB";
import User from "@/module/User";
import {hashPassword} from "@/utils/auth";

export default async function handler(req, res) {
    if (req.method !== "POST") return


    try {
        await connectDB()
    } catch (e) {
        console.log(e)
        return res
            .status(500)
            .json({status: "failed", message: "Error in connecting to DB"});
    }


    const {email, password} = req.body

    if (!email || !password){
        return res.status(422).json({
            status: "failed",
            message: "Invalid data",
        });
    }


    const existingUser = await User.findOne({email:email})
    if (existingUser){
        return res
            .status(422)
            .json({status: "failed", message: "User exists already!"});
    }

    const hashPasswords = await hashPassword(password)

    const newUser = await User.create({email: email, password: hashPasswords});
    console.log(newUser);


    res.status(201).json({status: "success", message: "Created user!"});


}