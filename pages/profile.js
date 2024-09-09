import React, {useEffect, useState} from 'react';
import {CgProfile} from "react-icons/cg";
import ProfileForm from "@/Component/module/ProfileForm";
import ProfileData from "@/Component/module/ProfileData";

function Profile(props) {

    const [name , setName]=useState("")
    const [lastName , setLastName]=useState("")
    const [password , setPassword]=useState("")
    const [data , setData]=useState(null)




    useEffect(() => {
        fetchDATA()
    }, [])
    const fetchDATA = async () => {
        const res = await fetch("/api/profile")
        const data = await res.json()
        console.log(data)
        if (data.status === "success" && data.data.name && data.data.lastName) {
            setData(data.data)
        }
    }
    console.log(data)






    const starthandler = async () =>{
        const res = await fetch("/api/profile",{
            method:"POST",
            body:JSON.stringify({name ,  lastName ,password}),
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json()
        console.log(data)

    }

    return (
        <div className="profile-form">
            <h2>
                <CgProfile/>
                profile
            </h2>

            { data ? <ProfileData data={data}/> :( <ProfileForm
                name={name}
                lastName={lastName}
                password={password}
                setName={setName}
                setLastName={setLastName}
                setPassword={setPassword}
                starthandler={starthandler}
            />) }
        </div>
    );
}

export default Profile;