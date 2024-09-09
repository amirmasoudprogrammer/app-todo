import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

function SigninPage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const {status} = useSession()

    useEffect(() => {
        if (status === "authenticated") router.replace("/")
            },[status])

    const loginUpHandler = async () => {
        const res = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false
        })
        if (!res.error) router.push("/")
    }
    return (
        <div className="signin-form">
            <h3>login Form</h3>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginUpHandler}>LOGIN</button>
            <div>
                <p>Create an account?</p>
                <Link href="/signup">Sign up</Link>
            </div>
        </div>
    );
}

export default SigninPage;