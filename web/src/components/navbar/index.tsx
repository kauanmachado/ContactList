import Link from "next/link";

export default function Navbar(){
    return (
        <header className="w-full shadow p-8 bg-gray-800">
            <div className="grid grid-cols-2 ">
                <div className="col-span-1 flex items-center justify-center">
                    <Link href="/">
                    <h1 className="text-2xl text-emerald-700 font-bold">Your Contact List</h1>
                    </Link>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <Link href="/sign-in" className="p-6 text-center rounded-lg shadow bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                        Acessar minha conta
                    </Link>
                </div>
            </div>
        </header>
    )
}