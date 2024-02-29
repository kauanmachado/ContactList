'use client'
import Input from "@/components/input";
import { UserServices } from "@/services/UserService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userServices = new UserServices()

const schema = z.object({
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    username: z.string().min(5, 'Por favor, insira um nome de usuario com pelo menos 5 caracteres.'),
    password: z.string().min(5, 'A senha deve ter pelo menos 5 caracteres.'),
    repeat_password: z.string()
})

type DataProps = z.infer<typeof schema>

export default function Page(){

    const {handleSubmit, register, formState: { errors }} = useForm<DataProps>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    async function handleForm( e: Event){
        e.preventDefault()
        
        try {
            await console.log("ok")
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center shadow p-12 bg-white rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Criar conta</h1>

            <form onSubmit={handleSubmit(handleForm)}>

            <Input 
            {...register('email')}
            type="email" 
            name="email" 
            placeholder="Digite seu email"
            label="E-mail"
            helperText={errors.email?.message}
            required />


            <Input 
            {...register('username')}
            type="text" 
            name="username"            
            placeholder="Digite seu nome de usuário"
            label="Nome do usuário"
            helperText={errors.username?.message}
            required />

            <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Digite sua senha"
            label="Senha"
            helperText={errors.password?.message}
            required />



            <Input 
            type="password"
            name="repeat_password" 

            placeholder="Digite sua senha novamente"
            label="Senha novamente"
            helperText={errors.repeat_password?.message}
            required />
            
            <button type="submit" className="mt-6 p-4 w-full text-center rounded-lg shadow bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                Cadastrar
            </button>
            </form>
            <span className="text-gray-500 mt-4">Já possuí cadastro? <Link className="underline text-cyan-600 hover:text-cyan-500" href="/sign-in">Cadastre-se aqui</Link></span>
        </div>
    )
}