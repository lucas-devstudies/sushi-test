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
         <section className="flex justify-center items-center h-screen w-screen">
            <form onSubmit={(e)=> {e.preventDefault();signUp();}} className="bg-mauve-950 flex flex-col gap-3 drop-shadow-[0_20px_100px_rgba(185,28,28,0.7)] py-4 px-5 rounded-2xl w-full max-w-100">
                <h2 className="font-bold text-3xl text-white">Registro</h2>
                <label className="w-100 text-start text-xl font-bold text-white">Nome:</label>
                <input className="w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setName(e.target.value)} name="name" placeholder="Digite seu nome"/>
                <label className="w-100 text-start text-xl font-bold text-white">Telefone:</label>
                <input className="w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" onChange={(e) => setPhone(e.target.value)} name="phone" placeholder="Digite seu telefone"/>
                <label className="w-100 text-start text-xl font-bold text-white">Email:</label>
                <input className="w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Digite seu email"/>
                <label className="w-100 text-start text-xl font-bold text-white">Senha:</label>
                <input className="w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Digite sua senha"/>
                <button className="bg-red-700 px-4 mt-2 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 font-changa" type="submit">Criar Conta</button>
                <a href="/admin/login" className="text-xl text-center mb-4">Já tem uma conta? <span className="text-white">Faça login</span></a>
            </form>
        </section>
    )
}