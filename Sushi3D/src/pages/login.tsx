
export default function Login() {

    return(
        <section id="login" className="flex justify-center items-center h-screen">
            <form className="flex flex-col gap-5 shadow-[0_0_50px_-3px] shadow-blue-950 py-4 px-5 rounded-2xl">
                <h2 className="font-bold text-3xl">Login</h2>
                <label className="w-100 text-start text-xl font-bold">Email:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" name="email" placeholder="Digite seu email"/>
                <label className="w-100 text-start text-xl font-bold">Senha:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="password" name="password" placeholder="Digite sua senha"/>
                <button type="submit" className="text-xl text-center bg-blue-950 text-white font-bold py-2 rounded-xl">Entrar</button>
                <a href="/register" className="text-xl text-center mb-4">Não tem uma conta? Cadastre-se</a>
            </form>
        </section>
    )
}