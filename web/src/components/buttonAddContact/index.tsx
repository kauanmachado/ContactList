import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddContact(){
    return (
        <Link href=""
         className="shadow-lg text-white rounded-lg p-6 fixed left-10 bottom-5 m-4 bg-cyan-400 hover:bg-cyan-500 "
         style={{ zIndex: 999 }}>
            <div className="flex flex-wrap justify-center items-center">
            <Plus /> Adicionar novo contato
            </div>
        </Link>
    )
}