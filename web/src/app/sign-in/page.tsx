import Link from "next/link";

export default function Page(){
    return (
        <div className="flex flex-col justify-center items-center shadow p-12 bg-white rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Acessar minha conta</h1>
            <div className="mt-2 w-full">
            <label htmlFor="email" className="text-gray-500">E-mail</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            className="w-full flex rounded-lg shadow bg-gray-50  sm:max-w-md p-4 " 
            placeholder="Digite seu email"
            required />
            </div>

            <div className="mt-4 w-full">
            <label htmlFor="email" className="text-gray-500">Senha</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            className=" w-full flex rounded-lg shadow bg-gray-50  sm:max-w-md p-4" 
            placeholder="Digite sua senha"
            required />
            </div>
            <Link href="/sign-in" className="mt-6 p-4 w-full text-center rounded-lg shadow bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                    Entrar
            </Link>
            <span className="text-gray-500 mt-4">Não possui cadastro? <Link className="underline text-cyan-600 hover:text-cyan-500" href="/sign-up">Cadastre-se aqui</Link></span>
        </div>
    )
}