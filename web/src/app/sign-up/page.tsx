'use client'
import Input from "@/components/input";
import Toast from "@/components/toast";
import { UserServices } from "@/services/UserService";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import redirectTo from "@/functions/redirectTo";

const userServices = new UserServices()

const schema = z.object({
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    username: z.string().min(5, 'Por favor, insira um nome de usuario com pelo menos 5 caracteres.'),
    password: z.string().min(5, 'A senha deve ter pelo menos 5 caracteres.'),
    repeat_password: z.string()
        .refine((data: any) => data.repeat_password === data.password, {
            message: 'As senhas não coincidem.',
            path: ['repeat_password']
        })
})

type DataProps = z.infer<typeof schema>

export default function Page() {

    const { handleSubmit: onSubmit, register, formState: { errors } } = useForm<DataProps>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })


    async function handleForm(formData: DataProps, e: SyntheticEvent) {
        e.preventDefault()

        try {
            const { repeat_password, ...restData } = formData
            console.log(restData)
            const res = await userServices.SignUp(restData)
            toast.success("Cadastro realizado com sucesso")
            console.log(res)
            redirectTo('/')
        } catch (err) {
            toast.error("Erro ao realizar cadastro")
            console.error(err)
        }
    }

    return (
        <div className="">
            <div className="shadow p-12 bg-white rounded-lg md:w-[600px]">

                <h1 className="text-2xl font-bold mb-6">Criar conta</h1>

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
                        {...register('username')}
                        type="text"
                        name="username"
                        placeholder="Digite seu nome de usuário"
                        label="Nome do usuário"
                        helperText={errors.username?.message}
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

                    <Input
                        {...register('repeat_password')}
                        type="password"
                        name="repeat_password"
                        placeholder="Digite sua senha novamente"
                        label="Senha novamente"
                        helperText={errors.repeat_password?.message}
                    />


                    <button type="submit" className="mb-6 mt-6 p-4 w-full text-center rounded-lg shadow bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                        Cadastrar
                    </button>
                </form>

                <div>
                    
                </div>
                <Toaster richColors position="bottom-right" />
                <span className="text-gray-500">Já possui cadastro? <Link className="underline text-cyan-600 hover:text-cyan-500" href="/sign-in">Entre aqui</Link></span>
            </div>
        </div>
    )
}
