import { supabase } from "../subabaseClient";

export const signUp = async (email: string, password: string, nickname: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        throw new Error(error.message);
    }

    // Add additional user info to profiles table
    const { error: profileError } = await supabase
        .from('profiles')
        .insert({ id: data.user?.id, username: nickname });

    if (profileError) {
        throw new Error(profileError.message);
    }
};
