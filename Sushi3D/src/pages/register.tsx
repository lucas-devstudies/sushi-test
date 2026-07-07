
export default function Register() {

    return(
         <section id="login" className="flex justify-center items-center h-screen">
            <form className="flex flex-col gap-5 shadow-[0_0_50px_-3px] shadow-blue-950 py-4 px-5 rounded-2xl">
                <h2 className="font-bold text-3xl">Register</h2>
                <label className="w-100 text-start text-xl font-bold">Nome:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" name="name" placeholder="Digite seu nome"/>
                <label className="w-100 text-start text-xl font-bold">CPF:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="text" name="cpf" placeholder="Digite seu CPF"/>
                <label className="w-100 text-start text-xl font-bold">Email:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="email" name="email" placeholder="Digite seu email"/>
                <label className="w-100 text-start text-xl font-bold">Senha:</label>
                <input className="border border-blue-950 text-xl px-2 py-2 rounded-xl placeholder:text-gray-500" type="password" name="password" placeholder="Digite sua senha"/>
                <button type="submit" className="text-xl text-center bg-blue-950 text-white font-bold py-2 rounded-xl">Criar Conta</button>
                <a href="/login" className="text-xl text-center mb-4">Já tem uma conta? Faça login</a>
            </form>
        </section>
    )
}