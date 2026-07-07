import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function Register() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');

    async function signUp(){
        const {data, error:authError} = await supabase.auth.signUp({
            email: email.trim(),
            password: password
        })
        if(authError){
            console.log(authError);
            return;
        }
        const usuarioId = data?.user?.id;
        
        if(usuarioId){
            const {error: dbError} = await supabase
            .from('users')
            .insert([
                {
                    id: usuarioId,
                    name: name,
                    phone: phone,
                }
            ]);

            if(dbError){
                console.log(dbError);
                return;
            }
        }
        console.log('Cadastro realizado com sucesso!')
    }

    return(
         <section id="login" className="flex justify-center items-center h-screen">
            <form onSubmit={(e)=> {e.preventDefault();signUp();}} className="flex flex-col gap-5 shadow-[0_0_50px_-3px] shadow-blue-950 py-4 px-5 rounded-2xl">
                <h2 className="font-bold text-3xl">Register</h2>
                <label className="w-100 text-start text-xl font-bold">Nome:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setName(e.target.value)} name="name" placeholder="Digite seu nome"/>
                <label className="w-100 text-start text-xl font-bold">Telefone:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setPhone(e.target.value)} name="phone" placeholder="Digite seu telefone"/>
                <label className="w-100 text-start text-xl font-bold">Email:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Digite seu email"/>
                <label className="w-100 text-start text-xl font-bold">Senha:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Digite sua senha"/>
                <button type="submit" className="text-xl text-center bg-blue-950 text-white font-bold py-2 rounded-xl">Criar Conta</button>
                <a href="/login" className="text-xl text-center mb-4">Já tem uma conta? Faça login</a>
            </form>
        </section>
    )
}