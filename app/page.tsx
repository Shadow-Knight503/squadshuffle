import {createClient} from "@/utils/supabase/server";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {signOut} from "@/utils/actions";

export default async function Home() {
    const supabase = await createClient()
    const session = await supabase.auth.getUser()

    if (!session.data.user) {
        return (
            <div className={"flex flex-col items-center justify-center h-screen gap-4"}>
                <h1 className={"text-4xl font-bold"}>Not Authenticated</h1>
                <Link className={"bg-slate-800 px-4 py-2 rounded-xl"} href={'/auth'}>Sign In</Link>
            </div>
        )
    }

    console.log(session.data.user.user_metadata)

    const {
        data: {
            user: {user_metadata, app_metadata}
        }
    } = session

    const { name, email, user_name, avatar_url } = user_metadata
    const userName = user_name ? `@${user_name}` : "Username not set"

    return (
        <main>
            <div className={"flex flex-col items-center justify-center h-screen gap-4"}>
                {avatar_url && (
                    <Image src={avatar_url} alt={name} width={200} height={200}
                           quality={100} className={"rounded-xl"}/>
                )}
                <h4 className={"text-xl font-bold"}>{name}</h4>
                <p className={"text-lg"}>User Name: {userName}</p>
                <p className={"text-lg"}>Email: {email}</p>
                <p className={"text-lg"}>Created with: {app_metadata.provider}</p>

                <form action={signOut}>
                    <button className={"bg-slate-800 px-4 py-2 rounded-xl"}>
                        Sign Out
                    </button>
                </form>
            </div>
        </main>
    );
}
