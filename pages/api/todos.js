import connectDB from "@/utils/connectDB";
import {getSession} from "next-auth/react";
import User from "@/module/User";
import {sortTodos} from "@/utils/sortTodos";

export default async function handler(req, res) {
    try {
        await connectDB()
    } catch (e) {
        console.log(e)
        return res
            .status(500)
            .json({status: "failed", message: "Error in connecting to DB"});
    }


    const session = getSession({req})
    if (!session) {
        return res
            .status(401)
            .json({status: "failed", message: "You are not logged in!"});
    }

    const user = await User.findOne({email: (await session).user.email})
    if (!user) {
        return res
            .status(404)
            .json({status: "failed", message: "User doesn't exsit!"});
    }

    if (req.method === "POST") {

        const {title, status, dispersion} = req.body
        if (!title || !status || !dispersion) {
            return res
                .status(422)
                .json({status: "failed", message: "Invaild data!"});
        }

        user.todos.push({title, status, dispersion})
        user.save();
        res.status(201).json({status: "success", message: "Todo created!"});
    } else if (req.method === "GET") {
        const sortData = sortTodos(user.todos)
        res.status(200).json({status: "success", data: {todos: sortData}})
    } else if (req.method === "PATCH") {
        const {id , status} = req.body

        if (!id || !status) {
            return res.status(422).json({status: "failed", message: "invalid data"})
        }


        const result = await User.updateOne({"todos._id":id},{$set:{"todos.$.status":status}})
        console.log(result)
        res.status(200).json({status:"success"})

    }else if (req.method === "DELETE"){
        // const result = await User.deleteOne({"_id":todos._id})
        console.log(user.todos.id)
        res.status(200).json({status:"success" , message:"delete todos"})
    }


}
