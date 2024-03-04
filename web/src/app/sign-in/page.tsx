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
    password: z.string().min(5, 'A senha deve ter pelo menos 5 caracteres.'),
})

type DataProps = z.infer<typeof schema>

export default function Page(){

    const {handleSubmit: onSubmit, register, formState: { errors }} = useForm<DataProps>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    async function handleForm(formData: DataProps){
        try {
            console.log("Form Data:", formData);
            // Chamada para o serviço de usuário aqui
            // await userServices.SignUp(formData);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="shadow p-12 bg-white rounded-lg md:w-[600px]">
            <h1 className="text-2xl font-bold mb-6">Acessar minha conta</h1>

            <form onSubmit={onSubmit(handleForm)}>

            <Input 
                {...register('email')}
                type="email" 
                name="email" 
                placeholder="Digite seu email"
                label="E-mail"
                helperText={errors.email?.message}
                />

            <Input 
                {...register('password')}
                type="password" 
                name="password" 
                id="password" 
                placeholder="Digite sua senha"
                label="Senha"
                helperText={errors.password?.message}
                />
            
            <button type="submit" className="mb-6 mt-6 p-4 w-full text-center rounded-lg shadow bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                    Entrar
            </button>
            
            </form>
            <span className="text-gray-500 mt-4">Não possui cadastro? <Link className="underline text-cyan-600 hover:text-cyan-500" href="/sign-up">Cadastre-se aqui</Link></span>
        </div>
    )
}