import { Mail, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function ContactCard() {
    return (
        <div className="bg-white rounded-lg shadow flex flex-col justify-center items-center p-6 md:p-12 gap-4">
            {/* <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <Image src="/img/profile-example.jpg" alt="profile" layout="fill" className="rounded-full object-cover" />
            </div> */}
            <h1 className="font-bold text-lg md:text-xl">Kauan da Silva Machado</h1>
            <div className="flex flex-row items-center text-gray-500">
                <Mail size={20} className="mr-1" /><p className="font-semibold">kauan.smachado0@gmail.com</p>
            </div>
            <div className="flex flex-row items-center text-gray-500">
                <Smartphone size={20} className="mr-1" /><p className="font-semibold">51 9999-9999</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/" className="p-2 md:p-4 rounded-lg shadow bg-cyan-500 text-white hover:bg-cyan-600 transition-all">
                    Editar
                </Link>
                <Link href="/" className="p-2 md:p-4 rounded-lg shadow bg-red-500 text-white hover:bg-red-600 transition-all">
                    Remover
                </Link>
            </div>
        </div>
    )
}
