import { supabase } from "../../supabase/supabaseClient";
import type {User} from '../models/User'

class UserService{
    async signUp(user:User){
        const {data, error:authError} = await supabase.auth.signUp({
            email: user.email.trim(),
            password: user.password
        })
        if(authError){
            throw new Error(authError.message)
        }
        const usuarioId = data?.user?.id;
        if(usuarioId){
            const {error: dbError} = await supabase
            .from('users')
            .insert([
                {
                    id: usuarioId,
                    name: user.name,
                    phone: user.phone,
                }
            ]);

            if(dbError){
                throw new Error(dbError.message)
            }
        }
        return {success:true, data:data.session};
    }
    async signIn(user:User){
        const { data,error } = await supabase.auth.signInWithPassword({
            email: user.email.trim(),
            password: user.password,
        })
        if(error){
            throw new Error(error.message);
        }
        return {success:true, data:data.session};
    };
} 
export const userService = new UserService();