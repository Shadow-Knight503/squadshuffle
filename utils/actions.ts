'use server'
import {createClient} from "./supabase/server";
import {Provider} from "@supabase/auth-js";
import {redirect} from "next/navigation";

interface OAuthData {
    provider: Provider;
    url: string;
}

const signInWith = (provider: Provider) => async () => {
    const supabase = await createClient()
    const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: auth_callback_url,
        }
    })

    console.log(data)

    if(error) {
        console.log(error)
    }

    redirect(data.url!)
}

const signinWithGoogle = signInWith('google')

const signOut = async () => {
    const supabase = await createClient()
    const session = await supabase.auth.signOut()
    redirect('/')
}

export { signinWithGoogle, signOut }
