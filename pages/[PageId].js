import React from 'react';
import connectDB from "@/utils/connectDB";
import User from "@/module/User";
import {getSession} from "next-auth/react";

function PageId({data}) {
    console.log({data})
    return (
        <div></div>
    )
        ;
}

export default PageId;

export async function getServerSideProps(context) {
    const {query :PageId} =context
    try {
        await connectDB()

    } catch (e) {
        console.log(e)
    }
    const user = await User.findOne({_id:PageId})
    console.log(user)
    return {
        props:{data:JSON.parse(JSON.stringify(User))}
    }
}
