'use client'
import React from 'react'
import {signinWithGoogle} from "@/utils/actions";

const AuthForm = () => {
    return (
        <div>
            <form>
                <button className={"bg-slate-800 px-4 py-2 rounded-xl"} formAction={signinWithGoogle}>
                    Sign In with Google
                </button>
            </form>
        </div>
    )
}

export default AuthForm
