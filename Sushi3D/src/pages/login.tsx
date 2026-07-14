import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    async function signIn(){
        const { data,error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password,
        })
        if(error){
            console.log(error);
            alert('Preencha todos os campos corretamente')
            return;
        }
        console.log(data);
        window.location.href = '/';
    };

    return(
         <section className="flex justify-center items-center h-screen w-screen">
            <form onSubmit={(e)=> {e.preventDefault();signIn();}} className="bg-mauve-950 flex flex-col gap-3 drop-shadow-[0_20px_100px_rgba(185,28,28,0.7)] py-4 px-5 rounded-2xl w-full max-w-100">
                <h2 className="font-bold text-3xl text-white font-changa">Acessar Conta</h2>
                <label className="w-100 text-start text-xl font-bold text-white font-changa">Email:</label>
                <input className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="seuemail@gmail.com"/>
                <label className="w-100 text-start text-xl font-bold text-white font-changa">Senha:</label>
                <input className="mt-2 w-full border-2  text-black bg-white text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Digite sua senha"/>
                <button className="bg-red-700 px-4 mt-2 py-3 rounded-4xl text-white font-semibold text-xl hover:bg-red-800 active:scale-90 font-changa" onClick={()=>signIn()}>Entrar</button>
                <a href="/admin/register" className="font-changa text-xl text-center mb-4 mt-2">Não tem uma conta? <span className="text-white">Cadastre-se</span></a>
            </form>
        </section>
    )
}